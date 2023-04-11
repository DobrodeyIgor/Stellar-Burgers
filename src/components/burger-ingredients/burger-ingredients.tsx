// @ts-nocheck
import React, { useState, useEffect } from "react";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import PropTypes from "prop-types";

import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredient } from "../burger-ingredient/burger-ingredient";
import { ingredientType } from "../../types/ingredient";
import { Modal } from "../modal/modal";
import { IngredientDetail } from "../ingredient-detail/ingredient-detail";
import { useDispatch } from "react-redux";
import {
  removeSelectedIngredient,
  setSelectedIngredient,
} from "../../services/selected-ingredient/selected-ingredient.slice";
import { useInView } from "react-intersection-observer";

export const BurgerIngredients = ({ ingredients = [], className = "" }) => {
  const [openDetail, setOpenDetail] = useState(false);
  const dispatch = useDispatch();

  const [bunRef, bunInView] = useInView({
    threshold: 0.1,
  });
  const [sauceRef, sauceInView] = useInView({
    threshold: 0.1,
  });
  const [mainRef, mainInView] = useInView({
    threshold: 0.1,
  });

  const handleCloseDetail = () => {
    dispatch(removeSelectedIngredient());
    setOpenDetail(false);
  };

  const handleOpenDetail = (ingredient) => {
    dispatch(setSelectedIngredient(ingredient));
    setOpenDetail(true);
  };

  const [current, setCurrent] = useState("bun");
  const burgerTabs = [
    { value: "bun", label: "Булки" },
    { value: "sauce", label: "Соусы" },
    { value: "main", label: "Начинки" },
  ];
  const ingredientsData = burgerTabs.map((item) => {
    return {
      ...item,
      data: ingredients.filter((ingredient) => ingredient.type === item.value),
    };
  });

  const onTabScroll = (type: string) => {
    setCurrent(type);
    const section: HTMLElement | null = document.getElementById(type);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleIngredientScroll = () => {
    switch (true) {
      case bunInView:
        setCurrent("bun");
        break;
      case sauceInView:
        setCurrent("sauce");
        break;
      case mainInView:
        setCurrent("main");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleIngredientScroll();
  }, [bunInView, sauceInView, mainInView]);

  return (
    <section className={`${styles["section"]} pt-10  ${className}`}>
      <h1 className='text text_type_main-large'>Соберите бургер</h1>
      <div className={`${styles["section__tabs"]} mt-5`}>
        {burgerTabs.map(({ value, label }) => (
          <Tab
            key={value}
            value={value}
            active={current === value}
            onClick={onTabScroll}
          >
            {label}
          </Tab>
        ))}
      </div>
      <div
        className={`${styles["section__ingredients-list"]} mt-5 custom-scroll`}
      >
        {ingredientsData.map(({ value, data, label }) => (
          <div
            id={value}
            ref={
              value === "bun" ? bunRef : value === "sauce" ? sauceRef : mainRef
            }
            key={value}
          >
            <h2
              className={`text text_type_main-medium ${styles["sections__ingredients-label"]}`}
            >
              {label}
            </h2>
            <div className={styles["section__ingredients"]}>
              {data.map((item) => (
                <BurgerIngredient
                  openDetailModal={handleOpenDetail}
                  key={item._id}
                  ingredient={item}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      {openDetail && (
        <Modal title='Детали ингредиента' onClose={handleCloseDetail}>
          <IngredientDetail />
        </Modal>
      )}
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType),
  className: PropTypes.string,
};

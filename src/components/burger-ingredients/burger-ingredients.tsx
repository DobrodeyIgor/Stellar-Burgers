// @ts-nocheck
import React, { Fragment, useState } from "react";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import PropTypes from "prop-types";

import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIngredient } from "../burger-ingredient/burger-ingredient";
import { ingredientType } from "../../types/ingredient";

export const BurgerIngredients = ({ ingredients = [], className = "" }) => {
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

  return (
    <section className={`${styles["section"]} pt-10  ${className}`}>
      <h1 className='text text_type_main-large'>Соберите бургер</h1>
      <div className={`${styles["section__tabs"]} mt-5`}>
        {burgerTabs.map(({ value, label }) => (
          <Tab
            key={value}
            value={value}
            active={current === value}
            onClick={setCurrent}
          >
            {label}
          </Tab>
        ))}
      </div>
      <div
        className={`${styles["section__ingredients-list"]} mt-5 custom-scroll`}
      >
        {ingredientsData.map(({ value, data, label }) => (
          <Fragment key={value}>
            <h2
              className={`text text_type_main-medium ${styles["sections__ingredients-label"]}`}
            >
              {label}
            </h2>
            <div className={styles["section__ingredients"]}>
              {data.map((item) => (
                <BurgerIngredient key={item._id} ingredient={item} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType),
  className: PropTypes.string,
};

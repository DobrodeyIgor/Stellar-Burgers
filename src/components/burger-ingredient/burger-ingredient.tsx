// @ts-nocheck
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredient.module.css";
import { ingredientType } from "../../types/ingredient";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

export const BurgerIngredient = ({ ingredient, openDetailModal }) => {
  const { constructorBun, constructorMain } = useSelector(
    (state) => state.burgerConstructor,
  );
  const handleOpenDetail = () => {
    openDetailModal(ingredient);
  };
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "add",
      item: ingredient,
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [],
  );
  const containerStyle = useMemo(
    () => ({
      opacity: isDragging ? 0.4 : 1,
    }),
    [isDragging],
  );

  const constructorCount = useMemo(() => {
    if (ingredient.type === "bun") {
      if (ingredient?._id === constructorBun?._id) {
        return 1;
      }
    }
    let sum = 0;
    constructorMain.map((item) => {
      if (item?._id === ingredient?._id) {
        sum += 1;
      }
      return item;
    });
    return sum;
  }, [constructorBun, constructorMain, ingredient]);

  return (
    <button
      ref={drag}
      style={containerStyle}
      onClick={handleOpenDetail}
      type='button'
      key={ingredient._id}
      className={styles["ingredient"]}
    >
      {constructorCount > 0 && <Counter count={constructorCount} />}
      <img
        className={styles["ingredient__image"]}
        src={ingredient.image}
        alt={ingredient.name}
      />
      <div className={styles["ingredient__currency"]}>
        <span className='text text_type_digits-default text_color_primary'>
          {ingredient.price}
        </span>
        <CurrencyIcon type='primary' />
      </div>
      <h3
        className={`text text_type_main-small text_color_primary ${styles["ingredient__name"]}`}
      >
        {ingredient.name}
      </h3>
    </button>
  );
};

BurgerIngredient.propTypes = {
  ingredient: ingredientType.isRequired,
  openDetailModal: PropTypes.func,
};

// @ts-nocheck
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredient.module.css";
import { ingredientType } from "../../types/ingredient";

export const BurgerIngredient = ({ ingredient, openDetailModal }) => {
  const handleOpenDetail = () => {
    openDetailModal(ingredient);
  };
  return (
    <>
      <button
        onClick={handleOpenDetail}
        type='button'
        key={ingredient._id}
        className={styles["ingredient"]}
      >
        <Counter count={1} />
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
    </>
  );
};

BurgerIngredient.propTypes = {
  ingredient: ingredientType.isRequired,
  openDetailModal: PropTypes.func,
};

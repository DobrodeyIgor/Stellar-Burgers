// @ts-nocheck
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import styles from "./burger-ingredient.module.css";
import { Modal } from "../modal/modal";
import { IngredientDetail } from "../ingredient-detail/ingredient-detail";
import { ingredientType } from "../../types/ingredient";

export const BurgerIngredient = ({ ingredient }) => {
  const [openDetail, setOpenDetail] = useState(false);
  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  const handleOpenDetail = () => {
    setOpenDetail(true);
  };

  return (
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
      <Modal
        open={openDetail}
        title='Детали ингредиента'
        onClose={handleCloseDetail}
      >
        <IngredientDetail ingredient={ingredient} />
      </Modal>
    </button>
  );
};

BurgerIngredient.propTypes = {
  ingredient: ingredientType,
};

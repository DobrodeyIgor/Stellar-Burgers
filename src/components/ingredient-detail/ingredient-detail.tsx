// @ts-nocheck
import React from "react";
import styles from "./ingredient-detail.module.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import { useSelector } from "react-redux";

export const IngredientDetail = () => {
  const { ingredient } = useSelector((store) => store.selectedIngredient);

  return (
    <div className={styles["ingredient"]}>
      <img
        className={styles["ingredient__image"]}
        src={ingredient.image_large}
        alt={ingredient.name}
      />
      <p
        className={`${styles["ingredient__name"]} mt-4 text text_type_main-medium`}
      >
        {ingredient.name}
      </p>
      <div className={`${styles["ingredient__detail"]} mt-8`}>
        <div className={`${styles["ingredient__detail-item"]} mr-5`}>
          <p className='text text_type_main-default text_color_inactive'>
            Калории,ккал
          </p>
          <p className='text text_type_digits-default text_color_inactive'>
            {ingredient.calories}
          </p>
        </div>
        <div className={`${styles["ingredient__detail-item"]} mr-5`}>
          <p className='text text_type_main-default text_color_inactive'>
            Белки, г
          </p>
          <p className='text text_type_digits-default text_color_inactive'>
            {ingredient.proteins}
          </p>
        </div>
        <div className={`${styles["ingredient__detail-item"]} mr-5`}>
          <p className='text text_type_main-default text_color_inactive'>
            Жиры, г
          </p>
          <p className='text text_type_digits-default text_color_inactive'>
            {ingredient.fat}
          </p>
        </div>
        <div className={`${styles["ingredient__detail-item"]}`}>
          <p className='text text_type_main-default text_color_inactive'>
            Углеводы, г
          </p>
          <p className='text text_type_digits-default text_color_inactive mt-1'>
            {ingredient.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
};

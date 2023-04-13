// @ts-nocheck
import React, { useEffect } from "react";
import { Container } from "../container/container";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";

import styles from "./ingredients-combine.module.css";
import { Loader } from "../loader/loader";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllIngredientsThunk } from "../../services/actions/ingredients.actions";

export const IngredientsCombine = () => {
  const { isLoading, isError } = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllIngredientsThunk());
  }, []);

  if (isLoading) {
    return (
      <div className={styles["combine__loader"]}>
        <Loader />
      </div>
    );
  }

  if (isError) {
    return (
      <div className={styles["combine__error"]}>
        <span className='text text_type_main-large'>
          Что-то пошло не так...
        </span>
      </div>
    );
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Container component='main' className={styles["combine"]}>
        <BurgerIngredients className={styles["combine-item"]} />
        <BurgerConstructor className={styles["combine-item"]} />
      </Container>
    </DndProvider>
  );
};

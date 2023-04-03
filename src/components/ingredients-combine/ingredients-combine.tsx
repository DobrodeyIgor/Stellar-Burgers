import React, { useEffect, useState } from "react";
import { Container } from "../container/container";
import { BurgerIngredients } from "../burger-ingredients/burger-ingredients";
import { BurgerConstructor } from "../burger-constructor/burger-constructor";
import { fetchIngredients } from "../../services/ingredients.service";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";

import styles from "./ingredients-combine.module.css";
import { Loader } from "../loader/loader";

export const IngredientsCombine = () => {
  const [ingredients, setIngredients] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchIngredients()
      .then((res) => {
        if (!res.success) {
          setError(true);
        } else {
          setIngredients(res.data);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className={styles["combine__loader"]}>
        <Loader />;
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
    <Container component='main' className={styles["combine"]}>
      <BurgerIngredients
        ingredients={ingredients}
        className={styles["combine-item"]}
      />
      <BurgerConstructor
        ingredients={ingredients}
        className={styles["combine-item"]}
      />
    </Container>
  );
};

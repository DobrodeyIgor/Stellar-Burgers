import React from "react";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import { Container } from "../container/container";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

export const AppHeader = () => {
  return (
    <Container component='header' className={`${styles["header"]} p-3`}>
      <nav className={styles["header__navigator"]}>
        <div className={styles["header__group"]}>
          <a href='/' className={styles["header__link"]}>
            <Button
              htmlType='button'
              type='secondary'
              size='small'
              extraClass={styles["header__button"]}
            >
              <BurgerIcon type={"primary"} />
              <span
                className={`text text_type_main-default text_color_primary ${styles["header__button-text"]}`}
              >
                Конструктор
              </span>
            </Button>
          </a>
          <a href='/' className={styles["header__link"]}>
            <Button
              htmlType='button'
              type='secondary'
              size='small'
              extraClass={styles["header__button"]}
            >
              <ListIcon type={"secondary"} />
              <span
                className={`text text_type_main-default text_color_inactive ${styles["header__button-text"]}`}
              >
                Лента заказов
              </span>
            </Button>
          </a>
        </div>
        <div className={styles["header__logo"]}>
          <Logo />
        </div>
        <a href='/' className={styles["header__link"]}>
          <Button
            htmlType='button'
            type='secondary'
            size='small'
            extraClass={styles["header__button"]}
          >
            <ProfileIcon type={"secondary"} />
            <span
              className={`text text_type_main-default text_color_inactive ${styles["header__button-text"]}`}
            >
              Личный кабинет
            </span>
          </Button>
        </a>
      </nav>
    </Container>
  );
};

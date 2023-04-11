// @ts-nocheck
import React from "react";
import logo from "../../images/done.png";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";

import styles from "./order-detail.module.css";
import { useSelector } from "react-redux";
import { Loader } from "../loader/loader";

export const OrderDetail = () => {
  const { order } = useSelector((state) => state.burgerOrder);

  if (!order) {
    <div className={styles["order"]}>
      <Loader />
    </div>;
  }
  return (
    <div className={styles["order"]}>
      {order?.success ? (
        <>
          <p className='text text_type_digits-large'>{order.order.number}</p>
          <p className={`${styles["order__id"]} text text_type_main-medium`}>
            идентификатор заказа
          </p>

          <img
            src={logo}
            className={styles["order__done-icon"]}
            alt='done_logo'
          />
          <p className={`${styles["order__start"]} text text_type_main-small`}>
            Ваш заказ начали готовить
          </p>
          <p
            className={`${styles["order__wait"]} text text_type_main-small text_color_inactive`}
          >
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      ) : (
        <p className={`${styles["order__id"]} text text_type_main-medium`}>
          При выполнении заказа произошла ошибка
        </p>
      )}
    </div>
  );
};

// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import logo from "../../images/done.png";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";

import styles from "./order-detail.module.css";

export const OrderDetail = ({ orderId }) => {
  return (
    <div className={styles["order"]}>
      <p className='text text_type_digits-large'>{orderId}</p>
      <p className={`${styles["order__id"]} text text_type_main-medium`}>
        идентификатор заказа
      </p>
      <img src={logo} className={styles["order__done-icon"]} alt='done_logo' />
      <p className={`${styles["order__start"]} text text_type_main-small`}>
        Ваш заказ начали готовить
      </p>
      <p
        className={`${styles["order__wait"]} text text_type_main-small text_color_inactive`}
      >
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

OrderDetail.propTypes = {
  orderId: PropTypes.string.isRequired,
};

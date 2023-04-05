// @ts-nocheck
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";

import styles from "./burger-constructor.module.css";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../modal/modal";
import { OrderDetail } from "../order-detail/order-detail";
import { ingredientType } from "../../types/ingredient";

const ORDER_ID = "034536";

export const BurgerConstructor = ({ ingredients = [], className = "" }) => {
  const [order] = useState({
    bun: "60d3b41abdacab0026a733c6",
    main: [
      "60d3b41abdacab0026a733c8",
      "60d3b41abdacab0026a733c9",
      "60d3b41abdacab0026a733cb",
      "60d3b41abdacab0026a733cd",
    ],
  });
  const [orderList, setOrderList] = useState({ bun: "", main: [] });
  const [openModalOrder, setModalOrder] = useState(false);

  const handleOpenOrderModal = () => {
    setModalOrder(true);
  };

  const handleCloseOrderModal = () => {
    setModalOrder(false);
  };
  useEffect(() => {
    const orderToIngredients = order.main.map((orderId) =>
      ingredients.find((item) => item._id === orderId),
    );
    const orderBun = ingredients.find((item) => item._id === order.bun);
    setOrderList({
      bun: orderBun,
      main: orderToIngredients.filter((item) => item !== undefined),
    });
  }, [ingredients, order]);

  return (
    <section className={`${styles["section"]} pt-25 ${className}`}>
      <div className={`${styles["section__list"]} `}>
        <div className={styles["section__item"]}>
          <div className={styles["section__item-drag"]}></div>
          <ConstructorElement
            isLocked
            type='top'
            text={orderList.bun?.name}
            price={orderList.bun?.price}
            thumbnail={orderList.bun?.image}
          />
        </div>
        <div className={`${styles["section__sublist"]} custom-scroll`}>
          {orderList.main.map((item, i) => (
            <div key={item._id + i} className={styles["section__item"]}>
              <div className={styles["section__item-drag"]}>
                {!item.isLocked && <DragIcon />}
              </div>
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          ))}
        </div>
        <div className={styles["section__item"]}>
          <div className={styles["section__item-drag"]}></div>
          <ConstructorElement
            isLocked
            type='bottom'
            text={orderList.bun?.name}
            price={orderList.bun?.price}
            thumbnail={orderList.bun?.image}
          />
        </div>
      </div>
      <div className={styles["section__amount"]}>
        <span className='text text_type_digits-medium'>
          610 <CurrencyIcon />
        </span>
        <Button
          onClick={handleOpenOrderModal}
          htmlType='button'
          extraClass='ml-10'
          size='large'
        >
          Оформить заказ
        </Button>
        {openModalOrder && (
          <Modal onClose={handleCloseOrderModal}>
            <OrderDetail orderId={ORDER_ID} />
          </Modal>
        )}
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType),
  className: PropTypes.string,
};

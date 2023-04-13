// @ts-nocheck
import React, { useMemo, useState } from "react";

import styles from "./amount.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Modal } from "../modal/modal";
import { OrderDetail } from "../order-detail/order-detail";
import { useDispatch, useSelector } from "react-redux";
import { sendOderThunk } from "../../services/burger-order/burger-order.slice";

export const Amount = () => {
  const { constructorBun, constructorMain } = useSelector(
    (state) => state.burgerConstructor,
  );
  const dispatch = useDispatch();
  const [openModalOrder, setModalOrder] = useState(false);

  const handleOpenOrderModal = () => {
    const idsForOrders = [
      constructorBun?._id,
      ...constructorMain.map((item) => item._id),
    ].filter((item) => item !== undefined);
    dispatch(sendOderThunk(idsForOrders));

    setModalOrder(true);
  };

  const handleCloseOrderModal = () => {
    setModalOrder(false);
  };

  const data = useMemo(() => {
    const mainSum = constructorMain.reduce(
      (prev, current) => (prev += current.price),
      0,
    );
    const isDisabled = !constructorBun && constructorMain.length === 0;
    const sum = (constructorBun?.price ?? 0) + mainSum;
    return { sum, isDisabled };
  }, [constructorBun, constructorMain]);

  return (
    <div className={styles["amount"]}>
      <span className='text text_type_digits-medium'>
        {data.sum} <CurrencyIcon type='primary' />
      </span>
      <Button
        disabled={data.isDisabled}
        onClick={handleOpenOrderModal}
        htmlType='button'
        extraClass='ml-10'
        size='large'
      >
        Оформить заказ
      </Button>
      {openModalOrder && (
        <Modal onClose={handleCloseOrderModal}>
          <OrderDetail />
        </Modal>
      )}
    </div>
  );
};

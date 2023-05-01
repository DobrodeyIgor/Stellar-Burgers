import styles from "./price-count.module.css";
import PropTypes from "prop-types";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export function PriceCount({ onClick }) {
  const elements = useSelector(
    (state) => state.constructorList.constructorList,
  );
  const buns = useSelector((state) => state.constructorList.buns);

  const total = useMemo(
    () =>
      elements.reduce((acc, { price }) => acc + price, 0) +
      buns.reduce((acc, { price }) => acc + price, 0) * 2,
    [buns, elements],
  );

  return (
    <div className={styles.payment}>
      <div className={styles.price}>
        <p className='text text_type_digits-medium'>{total}</p>
        <CurrencyIcon />
      </div>
      <Button type='primary' htmlType='submit' size='large' onClick={onClick}>
        Оформить заказ
      </Button>
    </div>
  );
}

PriceCount.propTypes = {
  onClick: PropTypes.func.isRequired,
};

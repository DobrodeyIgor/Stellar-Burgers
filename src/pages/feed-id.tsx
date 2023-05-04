import { useEffect } from "react";
import styles from "./pages.module.css";
import { OrderInfo } from "../components/order-info/order-info";
import {
  wsConnectionClosed,
  wsConnectionStart,
} from "../services/actions/wsActions";
import { useDispatch } from "../services/hooks/hooks";

export const FeedId = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnectionStart());
    return () => {
      dispatch(wsConnectionClosed());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.modal}>
      <OrderInfo />
    </div>
  );
};

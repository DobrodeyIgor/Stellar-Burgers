// @ts-nocheck
import React from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientType } from "../../types/ingredient";

import styles from "./burger-constructor-item.module.css";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { removeMainIngredient } from "../../services/slice/burger-constructor.slice";

export const BurgerConstructorItem = React.memo(
  ({ item, type, isLocked = false, findIngredient, moveIngredient }) => {
    const dispatch = useDispatch();
    const handleRemoveIngredient = () => {
      dispatch(removeMainIngredient(item.uuid));
    };
    const originalIndex = findIngredient(item.uuid).index;
    const [{ isDragging }, drag] = useDrag(
      () => ({
        type: "switch",
        item: { ...item, originalIndex },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
          const { uuid: droppedId, originalIndex } = item;
          const didDrop = monitor.didDrop();
          if (!didDrop) {
            moveIngredient(droppedId, originalIndex);
          }
        },
      }),
      [item, originalIndex, moveIngredient]
    );
    const [, drop] = useDrop(
      () => ({
        accept: "switch",
        hover({ uuid: draggedId }) {
          if (draggedId !== item.uuid) {
            const { index: overIndex } = findIngredient(item.uuid);
            moveIngredient(draggedId, overIndex);
          }
        },
      }),
      [findIngredient, moveIngredient]
    );
    const opacity = isDragging ? 0 : 1;
    return (
      <div
        ref={isLocked ? undefined : (node) => drag(drop(node))}
        className={styles["item"]}
        style={{ opacity }}
      >
        <div className={styles["item__drag"]}>{!isLocked && <DragIcon />}</div>
        <ConstructorElement
          isLocked={isLocked}
          type={type}
          text={item.name}
          price={item.price}
          thumbnail={item.image}
          handleClose={handleRemoveIngredient}
        />
      </div>
    );
  }
);

BurgerConstructorItem.propTypes = {
  item: ingredientType.isRequired,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  findIngredient: PropTypes.func,
  moveIngredient: PropTypes.func,
};

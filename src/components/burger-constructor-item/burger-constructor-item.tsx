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

export const BurgerConstructorItem = React.memo(
  ({
    item,
    type,
    isLocked = false,
    handleClose,
    findIngredient,
    moveIngredient,
  }) => {
    const originalIndex = findIngredient(item._id).index;
    const [{ isDragging }, drag] = useDrag(
      () => ({
        type: "switch",
        item: { ...item, originalIndex },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
        end: (item, monitor) => {
          const { _id: droppedId, originalIndex } = item;
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
        hover({ _id: draggedId }) {
          if (draggedId !== item._id) {
            const { index: overIndex } = findIngredient(item._id);
            moveIngredient(draggedId, overIndex);
          }
        },
      }),
      [findIngredient, moveIngredient]
    );
    const opacity = isDragging ? 0 : 1;
    return (
      <div
        ref={(node) => drag(drop(node))}
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
          handleClose={handleClose}
        />
      </div>
    );
  }
);

BurgerConstructorItem.propTypes = {
  item: ingredientType.isRequired,
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  handleClose: PropTypes.func,
  findIngredient: PropTypes.func,
  moveIngredient: PropTypes.func,
};

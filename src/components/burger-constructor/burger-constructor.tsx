// @ts-nocheck
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import update from "immutability-helper";

import styles from "./burger-constructor.module.css";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  addToConstructor,
  removeMainIngredient,
  setMain,
} from "../../services/burger-constructor/burger-constructor.slice";
import { BurgerConstructorItem } from "../burger-constructor-item/burger-constructor-item";
import { Amount } from "../amount/amount";

export const BurgerConstructor = ({ className = "" }) => {
  const { constructorBun, constructorMain } = useSelector(
    (state) => state.burgerConstructor
  );
  const dispatch = useDispatch();

  const [, drop] = useDrop(
    () => ({
      accept: "add",
      drop(_item) {
        dispatch(addToConstructor(_item));
        return undefined;
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        burgerType: monitor.getItemType(),
      }),
    }),
    []
  );

  const findIngredient = useCallback(
    (id) => {
      const ingredient = constructorMain.filter((c) => `${c._id}` === id)[0];
      return {
        ingredient,
        index: constructorMain.indexOf(ingredient),
      };
    },
    [constructorMain]
  );
  const moveIngredient = useCallback(
    (id, atIndex) => {
      const { ingredient, index } = findIngredient(id);
      dispatch(
        setMain(
          update(constructorMain, {
            $splice: [
              [index, 1],
              [atIndex, 0, ingredient],
            ],
          })
        )
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [findIngredient, constructorMain]
  );

  const handleRemoveIngredient = (index) => {
    dispatch(removeMainIngredient(index));
  };

  return (
    <section ref={drop} className={`${styles["section"]} pt-25 ${className}`}>
      <div className={`${styles["section__list"]} `}>
        {constructorBun && (
          <BurgerConstructorItem
            isLocked
            type='top'
            item={constructorBun}
            findIngredient={findIngredient}
            moveIngredient={moveIngredient}
          />
        )}
        <div className={`${styles["section__sub-list"]} custom-scroll`}>
          {constructorMain.map((item, i) => (
            <BurgerConstructorItem
              key={item._id + i}
              item={item}
              handleClose={() => handleRemoveIngredient(i)}
              findIngredient={findIngredient}
              moveIngredient={moveIngredient}
            />
          ))}
        </div>
        {constructorBun && (
          <BurgerConstructorItem
            isLocked
            type='bottom'
            item={constructorBun}
            findIngredient={findIngredient}
            moveIngredient={moveIngredient}
          />
        )}
      </div>
      <Amount />
    </section>
  );
};

BurgerConstructor.propTypes = {
  className: PropTypes.string,
};

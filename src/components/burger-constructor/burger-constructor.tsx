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
    (uuid) => {
      const ingredient = constructorMain.filter((c) => c.uuid === uuid)[0];
      return {
        ingredient,
        index: constructorMain.indexOf(ingredient),
      };
    },
    [constructorMain]
  );
  const moveIngredient = useCallback(
    (uuid, atIndex) => {
      const { ingredient, index } = findIngredient(uuid);
      console.log(ingredient, index, atIndex);
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

  return (
    <section ref={drop} className={`${styles["section"]} pt-25 ${className}`}>
      <div className={`${styles["section__list"]} `}>
        {constructorBun && (
          <BurgerConstructorItem
            isLocked
            type='top'
            item={{ ...constructorBun, name: constructorBun.name + " (верх)" }}
            findIngredient={findIngredient}
            moveIngredient={moveIngredient}
          />
        )}
        <div className={`${styles["section__sub-list"]} custom-scroll`}>
          {constructorMain.map((item, i) => (
            <BurgerConstructorItem
              key={item.uuid}
              item={item}
              findIngredient={findIngredient}
              moveIngredient={moveIngredient}
            />
          ))}
        </div>
        {constructorBun && (
          <BurgerConstructorItem
            isLocked
            type='bottom'
            item={{ ...constructorBun, name: constructorBun.name + " (низ)" }}
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

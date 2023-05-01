// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  constructorBun: undefined,
  constructorMain: [],
};

export const burgerConstructorSlice = createSlice({
  name: "burger-constructor",
  initialState,
  reducers: {
    addToConstructor: (state, action) => {
      const uuid = uuidv4();
      const currentItem = { ...action.payload, uuid };
      if (currentItem.type === "bun") {
        state.constructorBun = currentItem;
      } else {
        state.constructorMain = [...state.constructorMain, currentItem];
      }
    },
    removeMainIngredient: (state, action) => {
      state.constructorMain = state.constructorMain.filter(
        (item) => item.uuid !== action.payload
      );
    },
    setMain: (state, action) => {
      state.constructorMain = action.payload;
    },
  },
});

export const { addToConstructor, removeMainIngredient, setMain } =
  burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;

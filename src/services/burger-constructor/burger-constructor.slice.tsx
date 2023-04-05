// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  constructorBun: undefined,
  constructorMain: [],
};

export const burgerConstructorSlice = createSlice({
  name: "burger-constructor",
  initialState,
  reducers: {
    addToConstructor: (state, action) => {
      if (action.payload.type === "bun") {
        state.constructorBun = action.payload;
      } else {
        state.constructorMain = [...state.constructorMain, action.payload];
      }
    },
  },
});

export const { addToConstructor } = burgerConstructorSlice.actions;

export default burgerConstructorSlice.reducer;

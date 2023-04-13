import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredient: undefined,
};

export const burgerOrderSlice = createSlice({
  name: "selected-ingredient",
  initialState,
  reducers: {
    setSelectedIngredient: (state, action) => {
      state.ingredient = action.payload;
    },
    removeSelectedIngredient: (state) => {
      state.ingredient = undefined;
    },
  },
});

export const { setSelectedIngredient, removeSelectedIngredient } =
  burgerOrderSlice.actions;

export default burgerOrderSlice.reducer;

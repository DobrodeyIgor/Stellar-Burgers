import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: [],
};

export const burgerOrderSlice = createSlice({
  name: "burger-order",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.order = [];
    },
    removeToOrder: (state, action) => {},
  },
});

export const { addToOrder, removeToOrder } = burgerOrderSlice.actions;

export default burgerOrderSlice.reducer;

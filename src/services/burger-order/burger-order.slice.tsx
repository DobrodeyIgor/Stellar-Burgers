import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: undefined,
};

export const burgerOrderSlice = createSlice({
  name: "burger-order",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    removeOrder: (state) => {
      state.order = undefined;
    },
  },
});

export const { setOrder, removeOrder } = burgerOrderSlice.actions;

export default burgerOrderSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { sendOrderThunk } from "../actions/burger-order.actions";

const initialState = {
  order: undefined,
  isLoading: false,
  isError: false,
};

export const burgerOrderSlice = createSlice({
  name: "burger-order",
  initialState,
  reducers: {
    removeOrder: (state) => {
      state.order = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrderThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendOrderThunk.fulfilled, (state, action) => {
        state.order = action.payload;
        state.isLoading = false;
      })
      .addCase(sendOrderThunk.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const { removeOrder } = burgerOrderSlice.actions;

export default burgerOrderSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendOrder } from "../../api/order.service";

export const sendOderThunk = createAsyncThunk(
  "ingredients/fetchAll",
  async (ids) => {
    const response = await sendOrder(ids);
    return response.data;
  },
);

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
      .addCase(sendOderThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendOderThunk.fulfilled, (state, action) => {
        state.order = action.payload;
        state.isLoading = false;
      })
      .addCase(sendOderThunk.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const { removeOrder } = burgerOrderSlice.actions;

export default burgerOrderSlice.reducer;

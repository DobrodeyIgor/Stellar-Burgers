import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendOrder } from "../../api/order.service";

export const sendOrderThunk = createAsyncThunk("order/send", async (ids) => {
  const response = await sendOrder(ids);
  return response;
});

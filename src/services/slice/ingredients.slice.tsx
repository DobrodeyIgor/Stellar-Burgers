import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllIngredientsThunk } from "../actions/ingredients.actions";

const initialState = {
  ingredients: [],
  isLoading: false,
  isError: false,
};

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllIngredientsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllIngredientsThunk.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAllIngredientsThunk.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const {} = ingredientsSlice.actions;

export default ingredientsSlice.reducer;

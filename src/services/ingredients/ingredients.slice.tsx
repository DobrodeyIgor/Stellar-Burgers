import { createSlice } from "@reduxjs/toolkit";
import { fetchIngredients } from "../../api/ingredients.service";

const initialState = {
  ingredients: [],
  isError: false,
  isLoading: false,
};

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    fetchAll: (state) => {
      state.isLoading = true;
      fetchIngredients()
        .then((res) => {
          if (!res.success) {
            state.isError = true;
          } else {
            state.ingredients = res.data;
          }
        })
        .catch(() => {
          state.isError = true;
        })
        .finally(() => (state.isLoading = false));
    },
  },
});

export const { fetchAll } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;

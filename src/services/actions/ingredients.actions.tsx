import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchIngredients } from "../../api/ingredients.service";

export const fetchAllIngredientsThunk = createAsyncThunk(
  "ingredients/fetchAll",
  async () => {
    const response = await fetchIngredients();
    return response.data;
  }
);

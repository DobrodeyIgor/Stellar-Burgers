import { configureStore } from "@reduxjs/toolkit";
import burgerConstructorReducer from "./slice/burger-constructor.slice";
import ingredientsReducer from "./slice/ingredients.slice";
import burgerOrderReducer from "./slice/burger-order.slice";
import selectedIngredientReducer from "./slice/selected-ingredient.slice";

export const store = configureStore({
  reducer: {
    ingredients: ingredientsReducer,
    burgerConstructor: burgerConstructorReducer,
    burgerOrder: burgerOrderReducer,
    selectedIngredient: selectedIngredientReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
});

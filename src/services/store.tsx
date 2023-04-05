import { configureStore } from "@reduxjs/toolkit";
import burgerConstructorReducer from "./burger-constructor/burger-constructor.slice";
import ingredientsReducer from "./ingredients/ingredients.slice";
import burgerOrderReducer from "./burger-order/burger-order.slice";
import selectedIngredientReducer from "./selected-ingredient/selected-ingredient.slice";

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

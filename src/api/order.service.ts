// @ts-nocheck
import { BASE_URL, checkResponse } from "./";
const ingredientsRoute = "orders";

export const sendOrder = (ingredients) => {
  return fetch(BASE_URL + ingredientsRoute, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    method: "POST",
    body: JSON.stringify({ ingredients: ingredients }),
  }).then(checkResponse);
};

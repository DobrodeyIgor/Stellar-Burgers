import { BASE_URL, checkResponse } from "./";
const ingredientsRoute = "ingredients";

export const fetchIngredients = () => {
  return fetch(BASE_URL + ingredientsRoute, {
    method: "GET",
  }).then(checkResponse);
};

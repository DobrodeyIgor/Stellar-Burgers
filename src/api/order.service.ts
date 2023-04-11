// @ts-nocheck
const ingredientsRoute = "https://norma.nomoreparties.space/api/orders";

export const sendOrder = (ingredients) => {
  return fetch(ingredientsRoute, {
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    method: "POST",
    body: JSON.stringify({ ingredients: ingredients }),
  }).then((res) => res.json());
};

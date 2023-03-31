const ingredientsRoute = "https://norma.nomoreparties.space/api/ingredients";

export const fetchIngredients = () => {
  return fetch(ingredientsRoute, {
    method: "GET",
  }).then((res) => res.json());
};

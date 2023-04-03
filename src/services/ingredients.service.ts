const ingredientsRoute = "https://norma.nomoreparties.space/api/ingredients";

export const fetchIngredients = () => {
  try {
    return fetch(ingredientsRoute, {
      method: "GET",
    }).then((res) => res.json());
  } catch {
    throw new Error("fetchIngredients");
  }
};

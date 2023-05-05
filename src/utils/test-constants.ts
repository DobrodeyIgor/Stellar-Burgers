export const baseUrl = "http://localhost:3000/";

export const user = {
  name: "hjg",
  email: "hgjghj@gbkg.ru",
};

export const payload = {
  success: true,
  user: {
    name: "hjg",
    email: "hgjghj@gbkg.ru",
  },
};

export const payload2 = {
  success: true,
  user: {
    name: "Pavel",
    email: "Pavel.Vas@mail.ru",
  },
};

export const start = 0;
export const end = 1;

export const number = `00001`;

export const fluorescentBun = {
  _id: "60d3b41abdacab0026a733c7",
  name: "Флюоресцентная булка R2-D3",
  type: "bun",
  proteins: 44,
  fat: 26,
  carbohydrates: 85,
  calories: 643,
  price: 988,
  image: "https://code.s3.yandex.net/react/code/bun-01.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
  __v: 0,
  id: "1",
};

export const craterBun = {
  _id: "60d3b41abdacab0026a733c6",
  name: "Краторная булка N-200i",
  type: "bun",
  proteins: 80,
  fat: 24,
  carbohydrates: 53,
  calories: 420,
  price: 1255,
  image: "https://code.s3.yandex.net/react/code/bun-02.png",
  image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
  __v: 0,
  id: "2",
};

export const ingredientSauce = {
  calories: 100,
  carbohydrates: 100,
  fat: 99,
  image: "https://code.s3.yandex.net/react/code/sauce-01.png",
  image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
  name: "Соус с шипами Антарианского плоскоходца",
  price: 88,
  proteins: 101,
  type: "sauce",
  __v: 0,
  _id: "60d3b41abdacab0026a733cf",
  id: "3",
};

export const ingredientMain = {
  calories: 4242,
  carbohydrates: 242,
  fat: 142,
  image: "https://code.s3.yandex.net/react/code/meat-01.png",
  image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
  image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
  name: "Биокотлета из марсианской Магнолии",
  price: 424,
  proteins: 420,
  type: "main",
  __v: 0,
  _id: "60d3b41abdacab0026a733cb",
  id: "4",
};

export const ingredients = [
  {
    _id: "60d3b41abdacab0026a733c6",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
    id: "1",
  },
  {
    _id: "60d3b41abdacab0026a733cc",
    name: "Соус Spicy-X",
    type: "sauce",
    proteins: 30,
    fat: 20,
    carbohydrates: 40,
    calories: 30,
    price: 90,
    image: "https://code.s3.yandex.net/react/code/sauce-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-02-large.png",
    __v: 0,
    id: "2",
  },
  {
    _id: "60d3b41abdacab0026a733c8",
    name: "Филе Люминесцентного тетраодонтимформа",
    type: "main",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/meat-03.png",
    image_mobile: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/meat-03-large.png",
    __v: 0,
    id: "3",
  },
];

export const allOrders = {
  success: true,
  orders: [
    {
      createdAt: "2022-12-12T08:28:10.901Z",
      ingredients: [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cb",
        "60d3b41abdacab0026a733c7",
      ],
      name: "Био-марсианский флюоресцентный бургер",
      number: 11111,
      status: "done",
      updatedAt: "2022-12-12T08:28:10.901Z",
      _id: "6396e61a99a25c001cd6893c",
    },
    {
      createdAt: "2022-12-12T07:38:02.547Z",
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733c6",
      ],
      name: "Традиционный-галактический краторный бургер",
      number: 22222,
      status: "done",
      updatedAt: "2022-12-12T07:38:03.348Z",
      _id: "6396da5a99a25c001cd6890d",
    },
  ],
  total: 44444,
  totalToday: 444,
};

export const userOrders = {
  success: true,
  orders: [
    {
      createdAt: "2022-12-12T08:28:10.901Z",
      ingredients: [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cb",
        "60d3b41abdacab0026a733c7",
      ],
      name: "Био-марсианский флюоресцентный бургер",
      number: 11111,
      status: "done",
      updatedAt: "2022-12-12T08:28:10.901Z",
      _id: "6396e61a99a25c001cd6893c",
    },
    {
      createdAt: "2022-12-12T07:38:02.547Z",
      ingredients: [
        "60d3b41abdacab0026a733c6",
        "60d3b41abdacab0026a733ce",
        "60d3b41abdacab0026a733c6",
      ],
      name: "Традиционный-галактический краторный бургер",
      number: 22222,
      status: "done",
      updatedAt: "2022-12-12T07:38:03.348Z",
      _id: "6396da5a99a25c001cd6890d",
    },
  ],
};

export const ingredientClass = "[class^=ingredient-card_cardButton]";
export const closeButtonClass = "[class^=modal_closeButton]";
export const tabClass = "[class^=tab]";
export const burgerConstructorClass = "[class^=burger-constructor_total]";
export const burgerConstructorIngredientClass =
  "[class^=burger-element_element]";

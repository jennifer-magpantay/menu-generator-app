export const INITIAL_DISH_DATA = {
  menuTitle: "Menu title",
  menuDate: new Date().toISOString().split("T")[0], // Default to today's date
  menuTemplate: "classic",
  dishes: [
    {
      id: Date.now(),
      dishTitle: "Dish title",
      dishDescription: "Dish description",
      labelOptions: [],
      allergenOptions: [],
    },
  ],
};

export const ACTION_TYPES = {
  UPDATE_INFO: "UPDATE_INFO",
  UPDATE_DISH: "UPDATE_DISH",
  ADD_DISH: "ADD_DISH",
  REMOVE_DISH: "REMOVE_DISH",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_INFO:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ACTION_TYPES.UPDATE_DISH:
      return {
        ...state,
        dishes: state.dishes.map((dish) =>
          dish.id === action.payload.id
            ? { ...dish, [action.payload.name]: action.payload.value }
            : dish
        ),
      };
    case ACTION_TYPES.ADD_DISH:
      return {
        ...state,
        dishes: [
          ...state.dishes,
          {
            id: Date.now(),
            dishTitle: "Dish title",
            dishDescription: "Dish description",
            labelOptions: [],
            allergenOptions: [],
          },
        ],
      };
    case ACTION_TYPES.REMOVE_DISH:
      return {
        ...state,
        dishes: state.dishes.filter((dish) => dish.id !== action.payload.id),
      };
    default:
      throw Error("Unknown action: " + action.type);
  }
};

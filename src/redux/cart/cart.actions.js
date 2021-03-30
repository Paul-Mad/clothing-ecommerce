import { SHOW_CARTDROPDOWN, ADD_CART_ITEM } from "./cart.types";

export const showCartdropdown = () => ({
  type: SHOW_CARTDROPDOWN,
});

export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});

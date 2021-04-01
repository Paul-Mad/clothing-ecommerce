import {
  SHOW_CARTDROPDOWN,
  ADD_CART_ITEM,
  CLEAR_CHECKOUT_ITEM,
  REMOVE_CART_ITEM,
} from "./cart.types";

export const showCartDropdown = () => ({
  type: SHOW_CARTDROPDOWN,
});

export const addCartItem = (item) => ({
  type: ADD_CART_ITEM,
  payload: item,
});
export const removeCartItem = (item) => ({
  type: REMOVE_CART_ITEM,
  payload: item,
});
export const clearCheckoutItem = (id) => ({
  type: CLEAR_CHECKOUT_ITEM,
  payload: id,
});

import {
  SHOW_CARTDROPDOWN,
  ADD_CART_ITEM,
  CLEAR_CHECKOUT_ITEM,
  REMOVE_CART_ITEM,
} from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  cartDropdown: null,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CARTDROPDOWN:
      return { ...state, cartDropdown: !state.cartDropdown };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CLEAR_CHECKOUT_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;

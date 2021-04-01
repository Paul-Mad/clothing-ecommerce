import {
  SHOW_CARTDROPDOWN,
  ADD_CART_ITEM,
  REMOVE_CHECKOUT_ITEM,
} from "./cart.types";
import { addItemToCart } from "./cart.utils";

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
    case REMOVE_CHECKOUT_ITEM:
      console.log(action.payload);
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;

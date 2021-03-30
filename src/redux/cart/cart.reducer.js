import { SHOW_CARTDROPDOWN } from "./cart.types";

const INITIAL_STATE = {
  cartDropdown: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_CARTDROPDOWN:
      return { ...state, cartDropdown: !state.cartDropdown };

    default:
      return state;
  }
};
export default cartReducer;

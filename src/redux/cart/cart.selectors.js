import { createSelector } from "reselect";

//normal  selector
const selectCart = (state) => state.cart;

//return the memoized value from the selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartDropdown = createSelector(
  [selectCart],
  (cart) => cart.cartDropdown
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

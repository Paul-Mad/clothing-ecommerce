import React from "react";
import { withRouter } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { showCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

//Components and styles
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer className="cart-dropdown">
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.id} />
        ))
      ) : (
        <EmptyMessageContainer className="empty-message">
          Your cart is empty
        </EmptyMessageContainer>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        //call dispatch without mapDispatchToProps
        dispatch(showCartDropdown());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  //Using memoized selectors to get the value.
  ////createStructuredSelector is like passing the state as parameter for multiple selectors: (state) => { cartItems: selectCartItems(state), }
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

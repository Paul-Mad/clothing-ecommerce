import React from "react";
import { withRouter } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { showCartDropdown } from "../../redux/cart/cart.actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

//Components and styles
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.id} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        //call dispatch without mapDispatchToProps
        dispatch(showCartDropdown());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  //Using memoized selectors to get the value.
  ////createStructuredSelector is like passing the state as parameter for multiple selectors: (state) => { cartItems: selectCartItems(state), }
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

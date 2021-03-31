import React from "react";

//redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

//Components and styles
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem item={cartItem} key={cartItem.id} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  //Using memoized selectors to get the value.
  ////createStructuredSelector is like passing the state as parameter for multiple selectors: (state) => { cartItems: selectCartItems(state), }
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);

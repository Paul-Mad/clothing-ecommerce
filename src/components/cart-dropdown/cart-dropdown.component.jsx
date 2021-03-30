import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItemDropdown from "../cart-item-dropdown/cart-item-dropdown.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ items }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {items.map((item) => (
        <CartItemDropdown item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  items: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);

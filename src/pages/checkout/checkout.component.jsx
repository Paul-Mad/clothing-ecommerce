import React from "react";
//Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cart.selectors";
import { removeCheckoutItem } from "../../redux/cart/cart.actions";

//Components and styles
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckOutPage = ({ cartItems, totalPrice, removeCheckoutItem }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem
        key={cartItem.id}
        cartItem={cartItem}
        clicked={removeCheckoutItem}
      />
    ))}

    <div className="total">
      <span>TOTAL:€{totalPrice}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});
const mapDispatchToProps = (dispatch) => ({
  removeCheckoutItem: (id) => dispatch(removeCheckoutItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);

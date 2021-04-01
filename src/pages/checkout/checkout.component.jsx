import React from "react";
//Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cart.selectors";
import {
  clearCheckoutItem,
  removeCartItem,
  addCartItem,
} from "../../redux/cart/cart.actions";

//Components and styles
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const CheckOutPage = ({
  cartItems,
  totalPrice,
  clearCheckoutItem,
  removeCartItem,
  addCartItem,
}) => (
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
        clearCheckoutItem={clearCheckoutItem}
        removeCartItem={removeCartItem}
        addCartItem={addCartItem}
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
  clearCheckoutItem: (id) => dispatch(clearCheckoutItem(id)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);

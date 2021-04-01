import React from "react";

import { connect } from "react-redux";
import { clearCheckoutItem } from "../../redux/cart/cart.actions";
import "./cart-item.styles.scss";

const cartItem = ({
  item: { name, price, imageUrl, quantity, id },
  clearCheckoutItem,
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x €{price}
        </span>
      </div>
      <div
        placeholder="Remove from cart"
        className="remove-button"
        onClick={() => clearCheckoutItem(id)}
      >
        &#10005;
      </div>
    </div>
  );
};
const MapDispatchToProps = (dispatch) => ({
  clearCheckoutItem: (id) => dispatch(clearCheckoutItem(id)),
});
export default connect(null, MapDispatchToProps)(cartItem);

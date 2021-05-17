import React from "react";

import { connect } from "react-redux";
import { clearCheckoutItem } from "../../redux/cart/cart.actions";
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./cart-item.styles";

const cartItem = ({
  item: { name, price, imageUrl, quantity, id },
  clearCheckoutItem,
}) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x €{price}
        </span>
      </ItemDetailsContainer>
      <div
        placeholder="Remove from cart"
        className="remove-button"
        onClick={() => clearCheckoutItem(id)}
      >
        &#10005;
      </div>
    </CartItemContainer>
  );
};
const MapDispatchToProps = (dispatch) => ({
  clearCheckoutItem: (id) => dispatch(clearCheckoutItem(id)),
});
export default connect(null, MapDispatchToProps)(cartItem);

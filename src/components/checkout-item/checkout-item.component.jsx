import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  clearCheckoutItem,
  removeCartItem,
  addCartItem,
}) => {
  const { id, name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeCartItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addCartItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">€{price}</span>
      <div className="remove-button" onClick={() => clearCheckoutItem(id)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

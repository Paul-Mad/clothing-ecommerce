import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem: { id, name, imageUrl, price, quantity },
  clicked,
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">€{price}</span>
    <div className="remove-button" onClick={() => clicked(id)}>
      &#10005;
    </div>
  </div>
);

export default CheckoutItem;

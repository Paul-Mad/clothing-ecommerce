import React from "react";
import "./cart-item.styles.scss";

const cartItem = ({
  item: { name, price, imageUrl, quantity, id },
  clicked,
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
        onClick={() => clicked(id)}
      >
        &#10005;
      </div>
    </div>
  );
};

export default cartItem;

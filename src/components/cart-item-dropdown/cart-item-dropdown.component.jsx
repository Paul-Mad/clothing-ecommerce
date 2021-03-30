import React from "react";

const cartItemDropdown = ({ item }) => {
  const { id, name, price, imageUrl } = item;

  return <div key={id}>{name}</div>;
};

export default cartItemDropdown;

import React from "react";

import "./custom-button.styled.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherprops }) => {
  console.log(typeof showCartdropdown);
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;

import React from "react";

import "./custom-button.styled.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherprops
}) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
        inverted ? "inverted" : ""
      } custom-button`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;

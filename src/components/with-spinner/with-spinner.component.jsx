import React from "react";

//Styled Components
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

//If the isLoading state is true, its will render the spinner, otherwise will return the wrapped component we want
const WithSpinner = (WrapperComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;

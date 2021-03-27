import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
      //Check if there is a label
      label ? (
        <label
          className={`${
            //If the user types anything, add "shrink" to the classList
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null
    }
  </div>
);

export default FormInput;

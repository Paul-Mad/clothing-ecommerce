import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishbleKey = "pk_test_s3yAwbCdklUGr0Rmojkjx1h0";

  //Alert with the success token
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Ltd."
      billingAddress
      shippingAddress
      image=""
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishbleKey}
    />
  );
};

export default StripeCheckButton;

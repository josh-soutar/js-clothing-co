import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51JWxcFFTSSauCcVrYf0gRZoyT64XUQMdtPduXKDwrz4mgc137cyWQfQvmKhPEQgyxwhHRHbi38IFGaDt6FjUmnlb00mZr7htei";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="JS Clothing Co."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

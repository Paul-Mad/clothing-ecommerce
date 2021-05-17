import React from "react";
//Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cart.selectors";
import {
  clearCheckoutItem,
  removeCartItem,
  addCartItem,
} from "../../redux/cart/cart.actions";

//Components and styles
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripebutton.component";
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkout.styles";

const CheckOutPage = ({
  cartItems,
  totalPrice,
  clearCheckoutItem,
  removeCartItem,
  addCartItem,
}) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem
        key={cartItem.id}
        cartItem={cartItem}
        clearCheckoutItem={clearCheckoutItem}
        removeCartItem={removeCartItem}
        addCartItem={addCartItem}
      />
    ))}

    <TotalContainer>
      <span>TOTAL:€{totalPrice}</span>
    </TotalContainer>
    <WarningContainer>
      *Test credit card* <payments></payments>
      <br />
      4242 4242 4242 4242 - exp: 01/22 - cvv:123
    </WarningContainer>
    <StripeCheckoutButton price={totalPrice} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartTotalPrice,
});
const mapDispatchToProps = (dispatch) => ({
  clearCheckoutItem: (id) => dispatch(clearCheckoutItem(id)),
  removeCartItem: (item) => dispatch(removeCartItem(item)),
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);

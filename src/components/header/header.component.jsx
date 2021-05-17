import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";

//Components and styles
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

//Styled Components
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles.jsx";

//redux
import { connect } from "react-redux";
import { showCartDropdown } from "../../redux/cart/cart.actions";
import {
  selectCartItemsCount,
  selectCartDropdown,
} from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

//firebase
import { auth } from "../../firebase/firebase.util";

const mapStateToProps = createStructuredSelector({
  //Using memoized selectors to get the values.
  //createStructuredSelector is like passing the state as parameter for multiple selectors: (state) => { currentUser: selectCurrentUser(state) }
  currentUser: selectCurrentUser,
  cartDropdown: selectCartDropdown,
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  showCartDropdown: () => dispatch(showCartDropdown()),
});

const Header = ({ currentUser, cartDropdown, showCartDropdown, itemCount }) => (
  <HeaderContainer>
    <LogoContainer to="/">{<Logo className="logo" />}</LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>

      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon clicked={showCartDropdown} itemCount={itemCount} />
    </OptionsContainer>
    {cartDropdown ? <CartDropdown /> : null}
  </HeaderContainer>
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);

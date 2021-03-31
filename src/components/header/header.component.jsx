import React from "react";
import { Link } from "react-router-dom";
//import { ReactComponent as Logo } from "../../assets/crown.svg";

//Components and styles
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

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
  <div className="header">
    <Link className="logo-container" to="/">
      {
        //<Logo className="logo" />
      }
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon clicked={showCartDropdown} itemCount={itemCount} />
    </div>
    {cartDropdown ? <CartDropdown /> : null}
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);

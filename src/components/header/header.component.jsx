import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { showCartdropdown } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

//import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.util";

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cartDropdown: state.cart.cartDropdown,
  //Using memoized selectors to get the itemCount to avoid re-render
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  showCartdropdown: () => dispatch(showCartdropdown()),
});

const Header = ({ currentUser, cartDropdown, showCartdropdown, itemCount }) => (
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
      <CartIcon clicked={showCartdropdown} itemCount={itemCount} />
    </div>
    {cartDropdown ? <CartDropdown /> : null}
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);

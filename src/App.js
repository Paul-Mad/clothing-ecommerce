import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import SignInAndSignUpPage from "./pages/signin-signup/signin-signup.component.jsx";
import Header from "./components/header/header.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

import { setCurrentUser } from "./redux/user/user.actions";

import "./App.css";

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    //When Authentication state changes, get the logged-in user and set it to the App state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        //Get the created userRef
        const userRef = await createUserProfileDocument(userAuth);

        //set the user data to the App state
        userRef.onSnapshot((snapShot) =>
          this.props.setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        );
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    //Call the unsubscribe method when the component is about to unmount to prevent any memory leak in the application related to listeners still being open
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      //Sign in the user with email and password in firebase auth
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Set the property value dynamically
  handlerChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have and account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={(e) => this.handleSubmit(e)}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handlerChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handlerChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
            {/* <CustomButton onClick={signInWithFacebook}>
            Sign in with Facebook
          </CustomButton> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;

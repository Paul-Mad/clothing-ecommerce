import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBv8-WS3HVC15TT6VaSYbbossbyrDda5Ho",
  authDomain: "clothing-ecommecer.firebaseapp.com",
  projectId: "clothing-ecommecer",
  storageBucket: "clothing-ecommecer.appspot.com",
  messagingSenderId: "821786807151",
  appId: "1:821786807151:web:cd3a20a4c0248a10e0769a",
  measurementId: "G-LSRVEVXKVB",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Sign in with Google Account
const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

//Sign in with Facebook Account
// const faceProvider = new firebase.auth.FacebookAuthProvider();
// faceProvider.setCustomParameters({ display: "popup" });
// export const signInWithFacebook = () => auth.signInWithPopup(faceProvider);

export default firebase;

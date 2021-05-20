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

//Create a new user and store it in the database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //Check if there is a logged-in user
  if (!userAuth) return;

  //Get the user Ref using the logged-in user uid and create a snapShot
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //Get the collection Ref and snapshot from the users collection
  // const collectionRef = firestore.collection("users");
  // const collectionSnapshot = await collectionRef.get();

  //If the user doesn't exists in the  db, set the data of the new logged-in user to the userRef so it can be stored in the database.
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  //Get the collection reference from the database
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

// Convert the array obtained from the collection to an object with the data the app can use
export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export default firebase;

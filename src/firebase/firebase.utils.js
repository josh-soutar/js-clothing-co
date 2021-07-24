import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATa9xXclAO2xZuV4u1vHC4E2uURVoHQLg",
  authDomain: "crwn-clothing-db-edf90.firebaseapp.com",
  projectId: "crwn-clothing-db-edf90",
  storageBucket: "crwn-clothing-db-edf90.appspot.com",
  messagingSenderId: "741603264951",
  appId: "1:741603264951:web:8a5b75dc09ad24b9780032",
  measurementId: "G-KWZTHQ7Z27",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //userAuth will = null when user signs out

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    //if this user doesn't exist in the database yet
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    //Create a record for the user
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

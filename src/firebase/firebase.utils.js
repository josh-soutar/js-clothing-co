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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

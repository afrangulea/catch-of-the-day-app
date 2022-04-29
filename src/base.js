import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCOONc1UVRXHFRVFy1T2nTOdXsDLPwGR10",
  authDomain: "catch-of-the-day---react-app.firebaseapp.com",
  databaseURL:
    "https://catch-of-the-day---react-app-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;

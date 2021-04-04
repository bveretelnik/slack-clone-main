import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "AIzaSyBxkgZDs4Q5qNaKHdwL5y493BtScj1Uo40",
  authDomain: "react-slack-clone-37a75.firebaseapp.com",
  databaseURL: "https://react-slack-clone-37a75-default-rtdb.firebaseio.com/",
  projectId: "react-slack-clone-37a75",
  storageBucket: "react-slack-clone-37a75.appspot.com",
  messagingSenderId: "316554983655",
  appId: "1:316554983655:web:e15f14eb758e1360408a42",
};

firebase.initializeApp(firebaseConfig);

export default firebase;

// Firebase.js
import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDYAoXDVxmdMb3b9TtsbnuPDLcCbz8FSz8",
    authDomain: "smooth-landing.firebaseapp.com",
    databaseURL: "https://smooth-landing-default-rtdb.firebaseio.com",
    projectId: "smooth-landing",
    storageBucket: "smooth-landing.appspot.com",
    messagingSenderId: "1093966915491",
    appId: "1:1093966915491:web:ae42daacdc3073d1139c16",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;
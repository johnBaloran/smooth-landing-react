// Firebase.js
import firebase from "firebase/app";
import "firebase/database";

// const firebaseConfig = {
//     apiKey: "AIzaSyDYAoXDVxmdMb3b9TtsbnuPDLcCbz8FSz8",
//     authDomain: "smooth-landing.firebaseapp.com",
//     databaseURL: "https://smooth-landing-default-rtdb.firebaseio.com",
//     projectId: "smooth-landing",
//     storageBucket: "smooth-landing.appspot.com",
//     messagingSenderId: "1093966915491",
//     appId: "1:1093966915491:web:ae42daacdc3073d1139c16",
// };
  
const firebaseConfig = {

  apiKey: "AIzaSyBC2UCHqkLPgWlk1z2QI7jQEsWqJyk-zgY",

  authDomain: "smooth-landing-ac5a9.firebaseapp.com",
  databaseURL: 'https://smooth-landing-ac5a9-default-rtdb.firebaseio.com/',
  projectId: "smooth-landing-ac5a9",

  storageBucket: "smooth-landing-ac5a9.appspot.com",

  messagingSenderId: "708858959282",

  appId: "1:708858959282:web:23568dd161e3f3313e80ab"

};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase;
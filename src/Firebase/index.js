// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAZgliEna6_Qvm4Tjs8rwfDfjjla8YDDlY",
  authDomain: "authentication-users-6e289.firebaseapp.com",
  projectId: "authentication-users-6e289",
  storageBucket: "authentication-users-6e289.appspot.com",
  messagingSenderId: "655214476809",
  appId: "1:655214476809:web:32033f8935c609e7e582d8",
  measurementId: "G-NBZRRTPTZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTklvO7MXCNHZ-NKgGc_LiOV1VBCk7cPw",
  authDomain: "project11-airbnb.firebaseapp.com",
  projectId: "project11-airbnb",
  storageBucket: "project11-airbnb.appspot.com",
  messagingSenderId: "484621853564",
  appId: "1:484621853564:web:86c6221e0bcdd3c49c7af9"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
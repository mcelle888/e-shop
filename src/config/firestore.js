// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlBqH3eAPoWJlnp9wB0hQZ2rnoFNEB5gc",
  authDomain: "flower-haven.firebaseapp.com",
  projectId: "flower-haven",
  storageBucket: "flower-haven.appspot.com",
  messagingSenderId: "331544720217",
  appId: "1:331544720217:web:f37827110633b941361248",
  measurementId: "G-Z4XVML3JM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// creating and exporting database
export const db = getFirestore(app)
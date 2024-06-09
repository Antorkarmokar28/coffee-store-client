// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTFUCl_58ojBv14qCy6F8RmbEVjG8AQC0",
  authDomain: "coffee-store-938cb.firebaseapp.com",
  projectId: "coffee-store-938cb",
  storageBucket: "coffee-store-938cb.appspot.com",
  messagingSenderId: "126284051257",
  appId: "1:126284051257:web:e4a3218182f64bc82b6ee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
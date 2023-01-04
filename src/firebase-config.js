// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCokbWqYCVOl7RLtvVfHJI-L3J2rVJknE8",
  authDomain: "falah-3fef5.firebaseapp.com",
  projectId: "falah-3fef5",
  storageBucket: "falah-3fef5.appspot.com",
  messagingSenderId: "830437501481",
  appId: "1:830437501481:web:3996b6d65396ff8c0c0a38",
  measurementId: "G-HEWM98XRLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-fc300.firebaseapp.com",
  projectId: "mern-estate-fc300",
  storageBucket: "mern-estate-fc300.appspot.com",
  messagingSenderId: "386857525433",
  appId: "1:386857525433:web:3dd139b4226693bd5d3b68",
  measurementId: "G-25KQ1FZYT5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQSX9rhmpsI9CueWzkwjurOz8dkDxyWf4",
  authDomain: "emmaapp-1df68.firebaseapp.com",
  projectId: "emmaapp-1df68",
  storageBucket: "emmaapp-1df68.appspot.com",
  messagingSenderId: "1076885532218",
  appId: "1:1076885532218:web:971173cdc08bf2f8e30f03"
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECTID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
//   appId: process.env.REACT_APP_APPID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// const database = getFirestore();

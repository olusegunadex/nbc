// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_kWhZBWrOD1MiU0eKfdfC1hdXuPQSXEg",
  authDomain: "nigerian-business.firebaseapp.com",
  projectId: "nigerian-business",
  storageBucket: "nigerian-business.appspot.com",
  messagingSenderId: "556719293451",
  appId: "1:556719293451:web:a01eca14372cbf697bb30e",
  measurementId: "G-W3ZC5XEZJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

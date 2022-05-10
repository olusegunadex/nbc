import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.React_Project_apikey,
  authDomain: process.env.React_Project_authDomain,
  projectId: process.env.React_App_Project_projectId,
  storageBucket: process.env.React_App_Project_storageBucket,
  messagingSenderId: process.env.React_App_Project_messagingSenderId,
  appId: process.env.React_App_Project_appId,
  measurementId: process.env.React_App_Project_measurementId
};

/**
 Things we need from firebase
 * 1: auth
 * 2: database
 * 3: analytics
 */
// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const database = getFirestore();
const analytics = getAnalytics();

export { auth, database };

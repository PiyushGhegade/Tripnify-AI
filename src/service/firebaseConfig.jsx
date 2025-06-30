// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-GRmJiX3vdsg0R204Fc_7wnvh-97OAdA",
  authDomain: "tripnify-ai.firebaseapp.com",
  projectId: "tripnify-ai",
  storageBucket: "tripnify-ai.appspot.com", // ✅ FIXED
  messagingSenderId: "1047721185798",
  appId: "1:1047721185798:web:98f1931eae1377e160a987",
  measurementId: "G-LMR6MYY13J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

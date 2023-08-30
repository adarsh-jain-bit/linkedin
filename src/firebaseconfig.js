// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGp_yt-qKXAc37NILbUDR14OI6h0xyi9s",
  authDomain: "linkedin-83476.firebaseapp.com",
  projectId: "linkedin-83476",
  storageBucket: "linkedin-83476.appspot.com",
  messagingSenderId: "398734066961",
  appId: "1:398734066961:web:39b685722ed258d6eaf8b0",
  measurementId: "G-V3XSN679RF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };

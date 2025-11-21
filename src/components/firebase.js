// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// 👉 Yahan apna Firebase config paste karo
const firebaseConfig = {
  apiKey: "AIzaSyDTLIETTg-BO9fw7JqfpPfFEADPW3RSBAg",
  authDomain: "vizzle-landingpage.firebaseapp.com",
  projectId: "vizzle-landingpage",
  storageBucket: "vizzle-landingpage.firebasestorage.app",
  messagingSenderId: "1061160328748",
  appId: "1:1061160328748:web:6497361f2c73f023e9bb89",
  measurementId: "G-HC2Z40YG88"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Init Firestore
export const db = getFirestore(app);

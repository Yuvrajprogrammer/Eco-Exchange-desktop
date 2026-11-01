// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3lvy7ue2Ydc5vfoIaWo6T7mTs6ZOj8Uw",
  authDomain: "ecoexchange-delhincr.firebaseapp.com",
  projectId: "ecoexchange-delhincr",
  storageBucket: "ecoexchange-delhincr.firebasestorage.app",
  messagingSenderId: "706965615607",
  appId: "1:706965615607:web:f5f1e1985bce759207f4f2",
  measurementId: "G-L1GEHS58BR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqT5_XkcMlmTYXABCKwy6waHld6D1VVJA",
  authDomain: "eco-swap-fb873.firebaseapp.com",
  projectId: "eco-swap-fb873",
  storageBucket: "eco-swap-fb873.appspot.com",
  messagingSenderId: "1017226138288",
  appId: "1:1017226138288:web:e3ca15ab366cd09bf32175",
  measurementId: "G-1PGZL048X7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
console.log("Firebase initialized successfully");

// Initialize Cloud Firestore and get a reference to the service

export { app, analytics, auth }; // Export the Firebase app, analytics, and Firestore

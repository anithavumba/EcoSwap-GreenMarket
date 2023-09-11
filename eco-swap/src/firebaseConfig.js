// EcoSwap-GreenMarket/src/firebaseConfig.js

import firebase from 'firebase/app';
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

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
firebase.initializeApp(firebaseConfig);

export default firebase;

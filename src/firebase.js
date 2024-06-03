// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyA8igK9VuRlH_gAYAnwwXvpAZdhddHepkk",
    authDomain: "qwizweb.firebaseapp.com",
    databaseURL: "https://qwizweb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qwizweb",
    storageBucket: "qwizweb.appspot.com",
    messagingSenderId: "539498739510",
    appId: "1:539498739510:web:c0c6e0f297b2d216572597",
    measurementId: "G-ST8HHTNMTC"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, addDoc };

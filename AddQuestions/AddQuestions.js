import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { promises as fs } from 'fs';

// Your Firebase configuration
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
const db = getFirestore(app);

// Read questions from JSON file and add to Firestore
(async () => {
    try {
        const data = await fs.readFile('questions.json', 'utf8');
        const questions = JSON.parse(data);

        for (const question of questions) {
            try {
                const docRef = await addDoc(collection(db, 'quizzes'), question);
                console.log('Document written with ID: ', docRef.id);
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        }
    } catch (err) {
        console.error('Error reading questions.json file: ', err);
    }
})();

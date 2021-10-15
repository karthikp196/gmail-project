// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth" // New import
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

    const firebaseConfig = {
    apiKey: "AIzaSyA0-JG8m250oytPnQjnqRdwCiD4pZOxnck",
    authDomain: "project-57763.firebaseapp.com",
    projectId: "project-57763",
    storageBucket: "project-57763.appspot.com",
    messagingSenderId: "421941755700",
    appId: "1:421941755700:web:4cc612e5217d6092a4ef61",
    measurementId: "G-6GNDT7WMLT"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore();
    const auth = getAuth(app);
    const storage = getStorage();

    export  { db, auth, storage};





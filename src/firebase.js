// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyAfHBJ_nubShBFKR9Z-02fAsCNyivURvo8",
  authDomain: "react-firebase-app-8fd7e.firebaseapp.com",
  projectId: "react-firebase-app-8fd7e",
  storageBucket: "react-firebase-app-8fd7e.firebasestorage.app",
  messagingSenderId: "217747659303",
  appId: "1:217747659303:web:296d3dabf0bedf3e8e0c02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
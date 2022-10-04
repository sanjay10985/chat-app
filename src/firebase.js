// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdoy1LFAVJyE431dGhuemNK2QJ2-5Tzxk",
  authDomain: "chat-app-9c4ef.firebaseapp.com",
  projectId: "chat-app-9c4ef",
  storageBucket: "chat-app-9c4ef.appspot.com",
  messagingSenderId: "617251180042",
  appId: "1:617251180042:web:dfd80689f73d5a34e5d9f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
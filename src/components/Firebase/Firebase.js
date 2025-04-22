// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBEjgD3qfBJ3WfisAcMfthJ7DPXCZTPH8w",
  authDomain: "portfolio-2bcee.firebaseapp.com",
  projectId: "portfolio-2bcee",
  storageBucket: "portfolio-2bcee.firebasestorage.app",
  messagingSenderId: "204746487756",
  appId: "1:204746487756:web:f635caabadfb53e5530f69",
  measurementId: "G-M32388K03M",
};

let firebase = initializeApp(firebaseConfig);
let auth = getAuth(firebase);
const db = getFirestore(firebase);
// const db = getDatabase(firebase);
const googleProvider = new GoogleAuthProvider();
export { auth, firebase, db, googleProvider };
export { ref, set };

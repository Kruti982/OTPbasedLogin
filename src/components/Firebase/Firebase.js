// import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    //confgi
  };

  let firebase = initializeApp(firebaseConfig);
let auth = getAuth(firebase);
const db = getFirestore(firebase);
export { auth, firebase, db };

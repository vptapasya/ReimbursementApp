// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD9_pj05MkXJx3CV0rxPHgH8edtwHfHNHM",
  authDomain: "reimbursement-df658.firebaseapp.com",
  projectId: "reimbursement-df658",
  storageBucket: "reimbursement-df658.appspot.com",
  messagingSenderId: "49672624865",
  appId: "1:49672624865:web:3395d13d9ad9a3a9f2f5a0",
  measurementId: "G-BYKQ4FZ99M",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireStore = getFirestore(app);
const storage = getStorage(app);

const teamsDocsRef = collection(fireStore, "teams");
const claimsDocsRef = collection(fireStore, "claims");

export { auth, fireStore, teamsDocsRef, claimsDocsRef, storage };

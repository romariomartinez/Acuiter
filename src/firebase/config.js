// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  
  apiKey: "AIzaSyCScWVKNnpUbBL_RBaQXFJyRrMNquQb6k4",
  authDomain: "acuiter-admin.firebaseapp.com",
  projectId: "acuiter-admin",
  storageBucket: "acuiter-admin.firebasestorage.app",
  messagingSenderId: "1078320363213",
  appId: "1:1078320363213:web:b530c484fc2c95d32b1b84"
};




const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

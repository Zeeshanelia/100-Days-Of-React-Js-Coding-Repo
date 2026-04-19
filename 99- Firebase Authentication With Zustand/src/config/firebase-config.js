import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_DETAIL",
  authDomain: "fir-auth2-8fd24.firebaseapp.com",
  projectId: "YOUR_DETAIL",
  storageBucket: "YOUR_DETAIL",
  messagingSenderId: "YOUR_DETAIL",
  appId: "YOUR_DETAIL",
  measurementId: "YOUR_DETAIL",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
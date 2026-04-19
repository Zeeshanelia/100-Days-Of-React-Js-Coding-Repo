import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFhJbUEhegl5L8AgsrQ4N0P-NS4lWJF9w",
  authDomain: "fb-crud-66976.firebaseapp.com",
  projectId: "fb-crud-66976",
  storageBucket: "fb-crud-66976.firebasestorage.app",
  messagingSenderId: "968827388204",
  appId: "1:968827388204:web:da98b11af9d511827f6c89",
  measurementId: "G-DNZ1CLFJZF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
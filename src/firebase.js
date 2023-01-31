// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo_Aw7GbH7-R4ZRb8cyqYVj3_xeUkZ4zY",
  authDomain: "chat-sphere-8687f.firebaseapp.com",
  projectId: "chat-sphere-8687f",
  storageBucket: "chat-sphere-8687f.appspot.com",
  messagingSenderId: "186659516068",
  appId: "1:186659516068:web:ffdef86081262623674031",
  measurementId: "G-Z0NBKBSLVW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default db;

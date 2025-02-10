// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt0NEtLqH-NuEE04Uq9U8uP0cwTIee2VA",
  authDomain: "fakestore-4394b.firebaseapp.com",
  projectId: "fakestore-4394b",
  storageBucket: "fakestore-4394b.firebasestorage.app",
  messagingSenderId: "916738640380",
  appId: "1:916738640380:web:480dc336e22cc386804a79",
  measurementId: "G-FDP5KTYCGC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

export {db};
export {app};
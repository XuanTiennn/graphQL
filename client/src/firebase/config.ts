// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkBs-H1im8WtGliMiQPYxdrD1_0XIApxI",
  authDomain: "noted-app-b6c5d.firebaseapp.com",
  projectId: "noted-app-b6c5d",
  storageBucket: "noted-app-b6c5d.appspot.com",
  messagingSenderId: "836837768389",
  appId: "1:836837768389:web:553f92e797dc7f279c84ac",
  measurementId: "G-FPGH2CP6SD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

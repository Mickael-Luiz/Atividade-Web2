// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIDb9NQ2t2ZoUZMrrlPikclz13LxJ-66s",
  authDomain: "authrouters.firebaseapp.com",
  projectId: "authrouters",
  storageBucket: "authrouters.appspot.com",
  messagingSenderId: "1028090475455",
  appId: "1:1028090475455:web:27256c0c6e48766228e70a",
  measurementId: "G-WXNRR0J4G9"
};

// Initialize Firebase
export const Firebase = initializeApp(firebaseConfig);
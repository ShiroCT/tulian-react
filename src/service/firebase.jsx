// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqB-QnscsZS6rOD8N9XZ7wTUwabML-EtM",
  authDomain: "tulian-react.firebaseapp.com",
  projectId: "tulian-react",
  storageBucket: "tulian-react.firebasestorage.app",
  messagingSenderId: "625773943220",
  appId: "1:625773943220:web:c5288cfaa2d7d0f27ffae1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
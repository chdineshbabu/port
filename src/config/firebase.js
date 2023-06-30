// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaXDZ8TB4fDXEyNUwzO-ZnAVtIorfaDAs",
  authDomain: "portflio-21737.firebaseapp.com",
  projectId: "portflio-21737",
  storageBucket: "portflio-21737.appspot.com",
  messagingSenderId: "728458041072",
  appId: "1:728458041072:web:8b7884757760d1f762d435",
  measurementId: "G-EE62Y9Q9K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const db = getFirestore(app);
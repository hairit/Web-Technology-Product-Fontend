// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxSHTxgj-dM22VXP3jKPrFHQu-Vm1xU20",
  authDomain: "bill-list-d695c.firebaseapp.com",
  databaseURL: "https://bill-list-d695c-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bill-list-d695c",
  storageBucket: "bill-list-d695c.appspot.com",
  messagingSenderId: "157641836315",
  appId: "1:157641836315:web:94f9e86f6b5ae00b7d35be",
  measurementId: "G-6W2CGHLXZ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const db = getFirestore();

export {auth , db };

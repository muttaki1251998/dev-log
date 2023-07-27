// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYnFG7DhyMPIIbjRDMWtyUE0jDTR7ytiI",
  authDomain: "dev-log-371ab.firebaseapp.com",
  projectId: "dev-log-371ab",
  storageBucket: "dev-log-371ab.appspot.com",
  messagingSenderId: "321114183290",
  appId: "1:321114183290:web:a3649b3ddc98d5fb5bcdc3",
  measurementId: "G-RCPJEZ3JYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
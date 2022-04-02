// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth}  from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqWEGqpnc9jRKxle8zAccMNYeumx0pVTk",
  authDomain: "guru-dashboard-87fae.firebaseapp.com",
  projectId: "guru-dashboard-87fae",
  storageBucket: "guru-dashboard-87fae.appspot.com",
  messagingSenderId: "351641218364",
  appId: "1:351641218364:web:53f7274d978b0be0db4239",
  measurementId: "G-5JL88NQTY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;
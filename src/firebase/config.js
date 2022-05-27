// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmvoebZJMTY7tgWReBeJs0F2kKypcfMbg",
  authDomain: "e-commerce-coderhouse-94855.firebaseapp.com",
  projectId: "e-commerce-coderhouse-94855",
  storageBucket: "e-commerce-coderhouse-94855.appspot.com",
  messagingSenderId: "976626079412",
  appId: "1:976626079412:web:6f36b752b87e89ae0ce9e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default function getFirestoreApp() {
  return app;
}

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNbjyFm8rHuYCK8cGS5bSU6srD4f0ElQ8",
  authDomain: "book-radio-app.firebaseapp.com",
  projectId: "book-radio-app",
  storageBucket: "book-radio-app.appspot.com",
  messagingSenderId: "552369278266",
  appId: "1:552369278266:web:13b8891cc95700a5465403",
  measurementId: "G-4DZ6HPVGWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

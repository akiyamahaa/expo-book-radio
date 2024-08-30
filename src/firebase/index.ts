import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDNbjyFm8rHuYCK8cGS5bSU6srD4f0ElQ8',
  authDomain: 'book-radio-app.firebaseapp.com',
  projectId: 'book-radio-app',
  storageBucket: 'book-radio-app.appspot.com',
  messagingSenderId: '552369278266',
  appId: '1:552369278266:web:13b8891cc95700a5465403',
  measurementId: 'G-4DZ6HPVGWS',
}

const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)
export default firebaseApp
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

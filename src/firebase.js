// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import * as firestore from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlXoHSzaTOevNeNj8s24_uw8IumW6DxxQ",
  authDomain: "sunrise-study.firebaseapp.com",
  projectId: "sunrise-study",
  storageBucket: "sunrise-study.appspot.com",
  messagingSenderId: "441513638267",
  appId: "1:441513638267:web:aac7018e9ac5a63e3465de",
  measurementId: "G-E2CN49YTRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// export const db = firestore();

export default app
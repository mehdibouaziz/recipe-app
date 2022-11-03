// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBinZHsqmKq-BwSQMnxSl7PLqoZSKEFpgM",
  authDomain: "am-recipes.firebaseapp.com",
  projectId: "am-recipes",
  storageBucket: "am-recipes.appspot.com",
  messagingSenderId: "37674404067",
  appId: "1:37674404067:web:df48bb24be5106d7239dd6"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
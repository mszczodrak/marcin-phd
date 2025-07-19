// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3_e-tiFClc6TrTcDXCIl9LWj9sse6vqI",
  authDomain: "msz-ai-ad398.firebaseapp.com",
  projectId: "msz-ai-ad398",
  storageBucket: "msz-ai-ad398.firebasestorage.app",
  messagingSenderId: "629062902106",
  appId: "1:629062902106:web:95edef2354d90ff9a69363",
  measurementId: "G-56YL77JSTQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

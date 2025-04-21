// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu77A8hjv8O06I6otW4GPto9eudoKceUU",
  authDomain: "react-disney-plus-app-12dd4.firebaseapp.com",
  projectId: "react-disney-plus-app-12dd4",
  storageBucket: "react-disney-plus-app-12dd4.firebasestorage.app",
  messagingSenderId: "366163561992",
  appId: "1:366163561992:web:f9de491a8c9c21cc7d8bbd",
  measurementId: "G-E69HDLXH3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app
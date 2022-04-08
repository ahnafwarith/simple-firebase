// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjR57uol3o7IGPy_mffujonxOufUUE-mg",
    authDomain: "simple-firebase-authenti-41a94.firebaseapp.com",
    projectId: "simple-firebase-authenti-41a94",
    storageBucket: "simple-firebase-authenti-41a94.appspot.com",
    messagingSenderId: "206295181728",
    appId: "1:206295181728:web:51c1590f41f5a4cade9cc5",
    measurementId: "G-8E87KR4HHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
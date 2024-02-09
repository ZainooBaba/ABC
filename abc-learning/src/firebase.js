// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9Xbgc_r5_L0d88-74hBCGX1sHDXYHpiE",
    authDomain: "abc-learning-20390.firebaseapp.com",
    projectId: "abc-learning-20390",
    storageBucket: "abc-learning-20390.appspot.com",
    messagingSenderId: "276792822520",
    appId: "1:276792822520:web:28dd44544f0f171c64090d",
    measurementId: "G-YK137N1Y9P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
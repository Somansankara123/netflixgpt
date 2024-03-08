import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjZJh6JakVlF8miooj30PnEP0uKsHMiDA",
  authDomain: "netflixgpt-af3be.firebaseapp.com",
  projectId: "netflixgpt-af3be",
  storageBucket: "netflixgpt-af3be.appspot.com",
  messagingSenderId: "547615359935",
  appId: "1:547615359935:web:6a17a17898f940c1c9170a",
  measurementId: "G-3PNYQVNDWM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


 export const auth = getAuth();

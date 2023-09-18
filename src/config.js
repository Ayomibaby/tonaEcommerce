// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const APIkey = process.env.REACT_APP_FIREBASEKEY;
export const firebaseConfig = {
  apiKey: APIkey,
  authDomain: "tona-ecommerce.firebaseapp.com",
  projectId: "tona-ecommerce",
  storageBucket: "tona-ecommerce.appspot.com",
  messagingSenderId: "70760108301",
  appId: "1:70760108301:web:4426abaeaac6a963792044",
  measurementId: "G-0G160G7438"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWB8JhMYwRDt_TV0ayk-7gcFSvCIF_wLk",
  authDomain: "assignment-12-60267.firebaseapp.com",
  projectId: "assignment-12-60267",
  storageBucket: "assignment-12-60267.appspot.com",
  messagingSenderId: "910418592531",
  appId: "1:910418592531:web:bae506cc7ce4db31fed0e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
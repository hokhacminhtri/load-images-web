import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMXPNegqrAWJUAM8xl9mHde81mzDQwHp0",
  authDomain: "database-loadimage.firebaseapp.com",
  projectId: "database-loadimage",
  storageBucket: "database-loadimage.appspot.com",
  messagingSenderId: "270665154479",
  appId: "1:270665154479:web:8425d38d6d21c647a1f95a",
  measurementId: "G-KYM56TX620",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };

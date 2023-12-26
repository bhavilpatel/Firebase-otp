import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdNuzAGXhPumPVgrXYBMUzhiGDvVQHWQo",
  authDomain: "otp-6fae6.firebaseapp.com",
  databaseURL: "https://otp-6fae6-default-rtdb.firebaseio.com",
  projectId: "otp-6fae6",
  storageBucket: "otp-6fae6.appspot.com",
  messagingSenderId: "941652439267",
  appId: "1:941652439267:web:d9d588720062128f0dd5d6",
  measurementId: "G-H1E6YLW22W"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
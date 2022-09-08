
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUYpm8_72xVEf_ymi7eruiOrhpAUOA8Rk",
  authDomain: "netflix-clone-7f880.firebaseapp.com",
  projectId: "netflix-clone-7f880",
  storageBucket: "netflix-clone-7f880.appspot.com",
  messagingSenderId: "432286133103",
  appId: "1:432286133103:web:2d4ab7cc532059a32b969a",
  measurementId: "G-X4QJ63BW29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
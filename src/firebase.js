import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmu6pf5gZFFtHE3NVM_KJO4JquF0dE6hY",
  authDomain: "location-auth-e11b6.firebaseapp.com",
  projectId: "location-auth-e11b6",
  storageBucket: "location-auth-e11b6.appspot.com",
  messagingSenderId: "656854905841",
  appId: "1:656854905841:web:b5766657544f634cabca50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

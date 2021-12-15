import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "INSERT Your API",
  authDomain: "INSERT Your API",
  projectId: "INSERT Your API",
  storageBucket: "INSERT Your API",
  messagingSenderId: "INSERT Your API",
  appId: " INSERT Your API",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "Your Api Key",
  authDomain: "Your Auth Domain",
  projectId: "Your Project Id",
  storageBucket: "Your storageBucket",
  messagingSenderId: "Your Message",
  appId: "Your AppId",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

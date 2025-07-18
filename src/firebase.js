import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChCFN2eFpgYidrY-64aKOXJUOah21nIG0",
  authDomain: "uddeshhya-1b641.firebaseapp.com",
  projectId: "uddeshhya-1b641",
  storageBucket: "uddeshhya-1b641.appspot.com",
  messagingSenderId: "748383423401",
  appId: "1:748383423401:web:b11c5f9ee8ec4fe4b012b8",
  measurementId: "G-RP975PFYSB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
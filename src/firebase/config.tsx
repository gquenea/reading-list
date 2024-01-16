import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsbTBWziGIwnj1eN8gr_S1OKxnPNjk0-E",
  authDomain: "readinglistapp555.firebaseapp.com",
  projectId: "readinglistapp555",
  storageBucket: "readinglistapp555.appspot.com",
  messagingSenderId: "241665120685",
  appId: "1:241665120685:web:6ab57333d73fea4d60e924",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };

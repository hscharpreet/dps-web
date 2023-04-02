import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvZUfRZchCzXG1pzK0XsC_cUJN0_6P9Ek",
  authDomain: "dps-web-cc638.firebaseapp.com",
  databaseURL: "https://dps-web-cc638-default-rtdb.firebaseio.com",
  projectId: "dps-web-cc638",
  storageBucket: "dps-web-cc638.appspot.com",
  messagingSenderId: "763705811878",
  appId: "1:763705811878:web:b145ca8ea90a1548f7a567",
  measurementId: "G-WQMXEVEDX4",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };


import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBvZUfRZchCzXG1pzK0XsC_cUJN0_6P9Ek",
  authDomain: "dps-web-cc638.firebaseapp.com",
  projectId: "dps-web-cc638",
  storageBucket: "dps-web-cc638.appspot.com",
  messagingSenderId: "763705811878",
  appId: "1:763705811878:web:b145ca8ea90a1548f7a567",
  measurementId: "G-WQMXEVEDX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);

export {app,storage, storageRef};
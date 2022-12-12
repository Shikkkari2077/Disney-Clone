import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider  } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBeM3b6Vf409tqYEHru-dqmlAXAEYdY7cI",
    authDomain: "disneyplus-clone-29cf6.firebaseapp.com",
    projectId: "disneyplus-clone-29cf6",
    storageBucket: "disneyplus-clone-29cf6.appspot.com",
    messagingSenderId: "911465852696",
    appId: "1:911465852696:web:8bbeb2e435731af6a3f86d",
    measurementId: "G-PMLK83KKZH"
  };
  // apiKey: "AIzaSyAvhNtHcBaongD5yKdfJdyNHZfJV3BBn3k",
  // authDomain: "repair-man.firebaseapp.com",
  // projectId: "repair-man",
  // storageBucket: "repair-man.appspot.com",
  // messagingSenderId: "369942072219",
  // appId: "1:369942072219:web:bc756dd9635e173f16af3e",
  // measurementId: "G-KHQCV1ZLV6"
  
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const authentication = getAuth(app);
  export const provider = new GoogleAuthProvider();
  export const storage = getStorage(app);



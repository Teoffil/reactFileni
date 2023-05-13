import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    authDomain: "react-2023-fdf7c.firebaseapp.com",
    projectId: "react-2023-fdf7c",
    storageBucket: "react-2023-fdf7c.appspot.com",
    messagingSenderId: "170264266366",
    appId: "1:170264266366:web:66f06eabeab1e63bc3ba2f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
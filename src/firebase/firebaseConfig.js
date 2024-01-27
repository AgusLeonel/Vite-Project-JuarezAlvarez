import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMhR1tyA2AuSGCD4D5uY8ClyBevV1_ouY",
    authDomain: "proyecto-final-51b3e.firebaseapp.com",
    projectId: "proyecto-final-51b3e",
    storageBucket: "proyecto-final-51b3e.appspot.com",
    messagingSenderId: "681549108672",
    appId: "1:681549108672:web:29b8d3957ca6a9721fe425"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDzNvJYAz7BtyyirzqFiaMsb9BQaP_GXYw",
    authDomain: "gamesandmusic-33cd9.firebaseapp.com",
    projectId: "gamesandmusic-33cd9",
    storageBucket: "gamesandmusic-33cd9.appspot.com",
    messagingSenderId: "832232830468",
    appId: "1:832232830468:web:52ab46fcf7020c6e40a751"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
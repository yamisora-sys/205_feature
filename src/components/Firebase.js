import { initializeApp} from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { getFirestore, collection, addDoc, doc, setDoc } from "firebase/firestore";
const firebaseConfig = {
    projectId: "lamdo11",
    apiKey: "AIzaSyDr8EbRu7aCCFfmR5qzCaJKM0ujGwE7tpY",
    storageBucket: 'gs://lamdo11.appspot.com',
    databaseURL: "https://lamdo11-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app);

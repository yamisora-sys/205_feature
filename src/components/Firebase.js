import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDr8EbRu7aCCFfmR5qzCaJKM0ujGwE7tpY",
    storageBucket: 'gs://lamdo11.appspot.com'
};

export const app = initializeApp(firebaseConfig);
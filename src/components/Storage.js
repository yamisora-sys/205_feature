import { initializeApp } from "firebase/app";
import { app} from './Firebase';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from 'uuid';

const firebaseConfig = {
    apiKey: "AIzaSyDr8EbRu7aCCFfmR5qzCaJKM0ujGwE7tpY",
    storageBucket: 'gs://lamdo11.appspot.com'
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const uploadImage = () => {
    const ref = ref(storage, 'images/12345');
    const file = document.getElementById('image').files[0];
    uploadBytes(ref, file).then(() => {
        alert("Image uploaded successfully");
    });
    const task = uploadBytes(ref, file);
};

export function Storage(){
    return (
        <div>
            <input type="file" id="image"/>
            <button onClick={uploadImage}>Upload</button>
        </div>
    )
};

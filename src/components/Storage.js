import { app} from './Firebase';
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app);

const uploadImage = () => {
    const fileName = new Date();
    const imgRef = ref(storage, `images/${fileName}`);
    const file = document.getElementById('image').files[0];
    uploadBytes(imgRef, file).then(() => {
        alert("Image uploaded successfully");
    });
    const task = uploadBytes(imgRef, file);
};

export function Storage(){
    return (
        <div>
            <input type="file" id="image"/>
            <button onClick={uploadImage}>Upload</button>
        </div>
    )
};

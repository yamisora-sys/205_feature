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
};

export function ImageStorage(){
    return (
        <div>
            <div>
            <input type="file" id="image" accept='image/*'/>
            <button onClick={uploadImage}>Upload Image</button>
        </div>
        {/* <div>
            <input type="file" id="audio"/>
            <button onClick={uploadAudio}>Upload Audio</button>
        </div> */}
        </div>
    )
};

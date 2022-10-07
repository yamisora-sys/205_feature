import { app} from './Firebase';
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app);

var acceptFile = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'psd', 'raw', 'heif', 'indd', 'svg', 'ai', 'eps', 'pdf', 'heic'];

const uploadImage = () => {
    const fileName = new Date();
    const imgRef = ref(storage, `images/${fileName}`);
    const file = document.getElementById('image').files[0];
    const fileExtension = file.name.split('.').pop();
    if (acceptFile.includes(fileExtension)) {
        uploadBytes(imgRef, file).then(() => {
            alert("Image uploaded successfully");
        });
    } else {
        alert("Please upload a valid image file");
    }
};

export function ImageStorage(){
    return (
        <div>
        <div>
            <input type="file" id="image" accept='image/*'/>
            <button onClick={uploadImage}>Upload Image</button>
        </div>
        </div>
    )
};

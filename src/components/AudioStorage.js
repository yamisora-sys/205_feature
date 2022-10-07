import { app} from './Firebase';
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app);

const uploadAudio = () => {
    const fileName = new Date();
    const audioRef = ref(storage, `audio/${fileName}`);
    const file = document.getElementById('audio').files[0];
    uploadBytes(audioRef, file).then(() => {
        alert("Audio uploaded successfully");
    });
};

export function AudioStorage(){
    return (
        <div>
        <div>
            <input type="file" id="audio" accept='audio/*'/>
            <button onClick={uploadAudio}>Upload Audio</button>
        </div>
        </div>
    )
};

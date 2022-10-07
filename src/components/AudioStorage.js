import { app} from './Firebase';
import { getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage(app);
var acceptFile = ['mp4','mp3','acc','m4a']

const uploadAudio = () => {
    const fileName = new Date();
    const audioRef = ref(storage, `audio/${fileName}`);
    const file = document.getElementById('audio').files[0];
    const fileExtension = file.name.split('.').pop();
    if (acceptFile.includes(fileExtension)) {
        uploadBytes(audioRef, file).then(() => {
            alert("Audio uploaded successfully");
        });
    } else {
        alert("Please upload a valid audio file");
    }
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

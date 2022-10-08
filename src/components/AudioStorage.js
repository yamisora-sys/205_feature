import { app, db, IMAGES } from './Firebase';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";
import { withSwal } from 'react-sweetalert2';

const storage = getStorage(app);
var acceptFile = ['mp4','mp3','acc','m4a']
const docRef = doc(db, 'audio', new Date().getTime().toString());

const uploadAudio = () => {
    const fileName = new Date().getTime().toString();
    const audioRef = ref(storage, `audio/${fileName}`);
    const file = document.getElementById('audio').files[0];
    const fileExtension = file.name.split('.').pop();

    if (acceptFile.includes(fileExtension)) {
        uploadBytes(audioRef, file).then(() => {
            alert("Audio uploaded successfully");
            const data = {
                name: file.name,
                url: `audio/${fileName}`
            }
            setDoc(docRef, data).then(() => {
                alert("Audio uploaded successfully");
            }).catch((error) => {
                console.log(error);
            });
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

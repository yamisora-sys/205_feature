import { app, db, IMAGES } from './Firebase';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";

const storage = getStorage(app);
var acceptFile = ['mp4','mov']
const docRef = doc(db, 'audio', new Date().getTime().toString());

const uploadVideo = () => {
    const fileName = new Date().getTime().toString();
    const videoRef = ref(storage, `video/${fileName}`);
    const file = document.getElementById('video').files[0];
    const fileExtension = file.name.split('.').pop();

    if (acceptFile.includes(fileExtension)) {
        uploadBytes(videoRef, file).then(() => {
            alert("Video uploaded successfully");
            const data = {
                name: file.name,
                url: `video/${fileName}`
            }
            setDoc(docRef, data).then(() => {
                alert("Video uploaded successfully");
            }).catch((error) => {
                console.log(error);
            });
        });
    } else {
        alert("Please upload a valid video file");
    }
};

export function VideoStorage(){
    return (
        <div>
        <div>
            <input type="file" id="video" accept='video/*'/>
            <button onClick={uploadVideo}>Upload Video</button>
        </div>
        </div>
    )
};

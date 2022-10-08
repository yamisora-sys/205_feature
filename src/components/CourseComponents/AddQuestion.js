import { app, db, IMAGES } from './Firebase';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";

const storage = getStorage(app);

const docRef = doc(db, 'images', new Date().getTime().toString());

const uploadImage = () => {
    const fileName = new Date().getTime().toString();
    const imgRef = ref(storage, `images/${fileName}`);
    const file = document.getElementById('image').files[0];
    const fileExtension = file.name.split('.').pop();
    if (acceptFile.includes(fileExtension)) {
        uploadBytes(imgRef, file).then(() => {
            const data = {
                name: file.name,
                url: `images/${fileName}`
            }
            setDoc(docRef, data).then(() => {
                alert("Image uploaded successfully");
            }).catch((error) => {
                console.log(error);
            });
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

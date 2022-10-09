import { app, db, IMAGES } from '../Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";

const storage = getStorage(app);

var acceptFile = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'psd', 'raw', 'heif', 'indd', 'svg', 'ai', 'eps', 'pdf', 'heic'];

const docRef = doc(db, 'lesson', new Date().getTime().toString());

const addLesson = () => {
    const fileName = new Date().getTime().toString();
    const imgRef = ref(storage, `images/${fileName}`);
    const LessonName = document.getElementById('LessonName').value;
    const file = document.getElementById('image').files[0];
    const fileExtension = file.name.split('.').pop();
    if (acceptFile.includes(fileExtension)) {
        uploadBytes(imgRef, file).then(() => {
            getDownloadURL(imgRef).then((url) => {
            const data = {
                LessonName: LessonName,
                CourseId: '1',
                url: url
            }
            setDoc(docRef, data).then(() => {
                alert("Lesson added successfully");
            }).catch((error) => {
                console.log(error);
            });
        })
        });
    } else {
        alert("Please upload a valid image file");
    }
};

export function AddLesson(){
    return (
        <div>
            <h1>Add Lesson</h1>
            <form>
                <label>Lesson Name</label>
                <input type="text" id="LessonName" />
                <label>Lesson Image</label>
                <input type="file" id="image" />
                <button type="button" onClick={addLesson}>Add Lesson</button>
            </form>
        </div>
    )
};

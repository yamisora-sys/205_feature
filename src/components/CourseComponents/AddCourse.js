import { app, db, IMAGES } from '../Firebase';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";

const storage = getStorage(app);

var acceptFile = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'psd', 'raw', 'heif', 'indd', 'svg', 'ai', 'eps', 'pdf', 'heic'];

const docRef = doc(db, 'course', new Date().getTime().toString());

const AddCourse = () => {
    const fileName = new Date().getTime().toString();
    const imgRef = ref(storage, `images/${fileName}`);
    const CourseName = document.getElementById('CourseName').value;
    const TeacherName = document.getElementById('TeacherId').value;
    const file = document.getElementById('image').files[0];
    const fileExtension = file.name.split('.').pop();
    if (acceptFile.includes(fileExtension)) {
        uploadBytes(imgRef, file).then(() => {
            const data = {
                CourseName: CourseName,
                TeacherName: TeacherName,
                url: `images/${fileName}`
            }
            setDoc(docRef, data).then(() => {
                alert("Course added successfully");
            }).catch((error) => {
                console.log(error);
            });
        });
    } else {
        alert("Please upload a valid image file");
    }
};

export function addCourse(){
    return (
        <div>
        <div>
            <input type="file" id="image" accept='image/*'/>
            <button onClick={AddCourse}>Add Course</button>
        </div>
        </div>
    )
};

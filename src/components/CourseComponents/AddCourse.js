import { app, db, IMAGES } from '../Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";

const storage = getStorage(app);

var acceptFile = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'tiff', 'psd', 'raw', 'heif', 'indd', 'svg', 'ai', 'eps', 'pdf', 'heic'];

const docRef = doc(db, 'course', new Date().getTime().toString());

const addCourse = () => {
    const fileName = new Date().getTime().toString();
    const imgRef = ref(storage, `images/${fileName}`);
    const CourseName = document.getElementById('CourseName').value;
    const TeacherName = document.getElementById('TeacherId').value;
    const file = document.getElementById('image').files[0];
    const fileExtension = file.name.split('.').pop();
    if (acceptFile.includes(fileExtension)) {
        uploadBytes(imgRef, file).then(() => {
            getDownloadURL(imgRef).then((url) => {
            const data = {
                CourseName: CourseName,
                TeacherName: TeacherName,
                url: url
            }
            setDoc(docRef, data).then(() => {
                alert("Course added successfully");
            }).catch((error) => {
                console.log(error);
            });
        })
        });
    } else {
        alert("Please upload a valid image file");
    }
};

export function AddCourse(){
    return (
        <div>
            <h1>Add Course</h1>
            <form>
                <label>Course Name</label>
                <input type="text" id="CourseName" />
                <label>Teacher Name</label>
                <input type="text" id="TeacherId" />
                <label>Course Image</label>
                <input type="file" id="image" />
                <button type="button" onClick={addCourse}>Add Course</button>
            </form>
        </div>
    )
};

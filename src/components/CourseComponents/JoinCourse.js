import { app, auth, db, IMAGES } from '../Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";

const storage = getStorage(app);

const docRef = doc(db, 'userCourse', new Date().getTime().toString());

export function joinCourse(Name){
    const studentName = auth.currentUser.displayName;
    const CourseName = Name;
            const data = {
                studentName: studentName,
                CourseName: CourseName,
            }
            setDoc(docRef, data).then(() => {
                alert("Course joined successfully");
            }).catch((error) => {
                console.log(error);
            });
};

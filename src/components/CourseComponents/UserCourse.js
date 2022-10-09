import { app, auth, db} from '../Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../../css/List.css"
import { useEffect, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs} from "firebase/firestore";
import { async } from '@firebase/util';


export function UserCourse(){
    const [userCourse, setUserCourse] = useState('');
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    onAuthStateChanged(auth, (user) => {
        if (user) {
        const Name = user.displayName;
        console.log(Name);
        setUser(Name);
        console.log(user)
        } else {
        console.log("User is signed out");
        }
        });

    const getUserCourse = async () => {
        try {
            const q = query(collection(db, "userCourse"), where("studentName", "==", user));
            const querySnapshot = await getDocs(q)
            let data = []
            querySnapshot.forEach((doc) => {
                data.push(doc.data())
            })

            setUserCourse(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {   
        getUserCourse()
    }, [userCourse]);
    console.log('us',isLoading)
    
    return (
        <div>
            <div class="list">

                {!isLoading && userCourse && userCourse.map((doc) => 
                     (
                        <div className="item">
                            <div className="title"><h1>{doc.CourseName}</h1></div>
                            <button type="button" className="button">Get In</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
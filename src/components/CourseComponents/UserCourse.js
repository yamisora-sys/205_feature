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
            const querySnapshot = await getDocs(q);
            let data = []
            querySnapshot.forEach((doc) => {
                data.push(doc.data())
            })
            return data
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        async function fetchData() {
            const course=await getUserCourse();
            setUserCourse(course)
        }
        fetchData()     
    }, []);
    
    return (
        <div>
            <div class="list">
                {userCourse && userCourse.map((doc) => 
                     (
                        <div className="item">
                            <div className="title"><h1>{doc.CourseName}</h1></div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
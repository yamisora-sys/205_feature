import { app, auth, db} from '../Firebase';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "../../css/List.css"
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot, getDocs} from "firebase/firestore";
import { async } from '@firebase/util';
import { onAuthStateChanged } from 'firebase/auth';

const docRef = doc(db, 'userCourse', new Date().getTime().toString());

const getlistCourse = async () => {
    try {
        const q = query(collection(db, "course"));
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

export function ListCourse(){
    const [courseLists, setCourseLists] = useState('');
    const [studentName, setStudentName] = useState(null);

    function joinCourse(name){
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const studentName = user.displayName;
              console.log(studentName);
              setStudentName(studentName);
            } else {
              console.log("User is signed out");
            }
          });
      
          const CourseName = name;
                  const data = {
                      studentName: studentName,
                      CourseName: CourseName,
                  }
                  console.log(data);
                  setDoc(docRef, data).then(() => {
                      alert("Course joined successfully");
                  }).catch((error) => {
                      console.log(error);
                  });
    }

    useEffect(() => {
        async function fetchData() {
            const course=await getlistCourse();
            setCourseLists(course)
        }
        fetchData()     
    }, []);
    
    return (
        <div>
            <div class="list">
                {courseLists && courseLists.map((doc) => 
                     (
                        <div className="item">
                            <div className="title"><h1>{doc.CourseName}</h1></div>
                            <div>
                                <img src={doc.url} alt="image" width="50%" />
                            </div>
                            <div className="Teacher">
                                <p>Teacher: {doc.TeacherName}</p>
                            </div>
                            <button type="button" className="button" onClick={() => joinCourse(doc.CourseName)}>Subcribe</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
};

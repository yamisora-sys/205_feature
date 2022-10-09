import {db} from '../Firebase';
import {getFirestore, collection, getDocs, query, where, onSnapshot, doc, setDoc} from 'firebase/firestore';
import {useEffect, useState, Component} from 'react';
import { Link } from 'react-router-dom';

const getAllLesson = async () =>{
    try{
        const q = query(collection(db, "lesson"));
        const querySnapshot = await getDocs(q);
        let data = []
        querySnapshot.forEach((doc) => {
            let temp = doc.data()
            temp.id = doc.id
            data.push(temp)
        })
        return data
    }catch(error){
        console.log(error);
    }
}

export function ListLesson(){
    const [listlesson, setLesson] = useState('');
    useEffect(() => {
        async function fetchData() {
            const lesson=await getAllLesson();
            setLesson(lesson)
        } fetchData()
    }, []);
    return (
        <>
        <div>
            <div class="list">
                {listlesson && listlesson.map((doc) =>
                    (
                        <div className="item">
                            <div className="title"><h1>{doc.name}</h1></div>
                            <div>
                                <img src={doc.banner} alt="image" width="50%" />
                            </div>
                            <div className="Teacher">
                                <p>Teacher: {doc.teacher_id}</p>
                            </div>
                            <Link to={`/assignment/${doc.id}`}><button type="button" className="button" >Assignment</button></Link>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}
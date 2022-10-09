import {db} from '../Firebase';
import {getFirestore, collection, getDocs, query, where, onSnapshot, doc, setDoc} from 'firebase/firestore';
import {useEffect, useState, Component} from 'react';
import { Link } from 'react-router-dom';
export class ListLesson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            assignmentList: [],
            lesson : [],
            lesson_id: []
        }
    }

    componentDidMount() {
        const lesson = query(collection(db, "lesson"));
        onSnapshot(lesson, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let id = ({'id' : doc.id})
                let data = ({...id, ...doc.data()})
                console.log(data)
                this.setState({
                    lesson: [...this.state.lesson, data]
                })
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Assignment</h1>
                <div>
                    {this.state.lesson.map((doc) => (
                        <div>
                            <h3>{doc.name}</h3>
                            <p>{doc.description}</p>
                            <button><Link to={`lesson/assignment/${doc.id}`}>Add Assignment</Link></button>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
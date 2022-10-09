import {db} from '../Firebase';
import {getFirestore, collection, getDocs, query, where, onSnapshot, doc, setDoc} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {Component } from 'react';
import {  useParams } from 'react-router-dom';

export class Assignment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            assignmentList: [],
            lesson_id: props.match.params.id
        }
    }
    addAssignment = () => {
        const testname = document.getElementById('testname').value;
        const data = {
            name: testname,
            lesson_id: this.state.lesson_id,
            dueDate: new Date().getTime().toString(),
            beginDate: new Date().getTime().toString() - 1000000,
            banner: 'https://ecdn.game4v.com/g4v-content/uploads/2021/07/Siesta-4-game4v.jpg'
        }
        const docRef = doc(db, 'assignment', new Date().getTime().toString());
        setDoc(docRef, data).then(() => {
            alert("Assignment uploaded successfully");
        }).catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <h1>Assignment {this.state.lesson_id}</h1>
                <div>
                    <input type='text' placeholder='Name' id='testname'/>
                    <button onClick={this.addAssignment}>Add Assignment</button>
                </div>
            </div>
        )
    }
}
import firebase from 'firebase/compat/app';
import { app, auth } from './Firebase';
import { getDatabase, set, onValue, ref } from "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';

const database = getDatabase(app);


function Send (name, message) {

    const time = new Date();
    const input = document.getElementById('message_input').value;

    input.value = "";

    document.getElementById('message').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});

    set(ref(database, 'message/' + time), {
        name: name,
        message: input
    });
}

function Receive () {
    
        const dbRef = ref(database, 'message');
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
        });
}

export function Message(){
    return (
        <div id="chat">
            <ul id="messages"></ul>
            <form id="message_form">
                <input id="message_input" type="text" placeholder="Enter your message"></input>
                <button id="message_button" type="submit" onClick={Send}>Send</button>
            </form>
        </div>
    )
}
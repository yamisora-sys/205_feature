import firebase from 'firebase/compat/app';
import { app, auth, db } from '../Firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';

const user = auth.currentUser;

function updateProfile(){
    const displayName = document.getElementById('displayName').value;
    const AvatarURL = document.getElementById('AvatarURL').value;

    updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: AvatarURL
        }).then(() => {
            alert("Profile updated successfully");
        }
        ).catch((error) => {
            console.log(error);
        }
        );
}

export function UpdateProfile(){
    return (
        <div>
            <form>
                <h2>Update Profile</h2>
                <div className="mb-3">
                    <label htmlFor="displayName">Display Name</label>
                    <input type="text" id="displayName" placeholder="Display Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="AvatarURL">Avatar URL</label>
                    <input type="text" id="AvatarURL" placeholder="Avatar URL" />
                </div>
                <button onClick={updateProfile}>Update Profile</button>
            </form>
        </div>
    )
    
}

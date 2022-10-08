import firebase from 'firebase/compat/app';
import { app, auth, db } from '../Firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, collection, addDoc, doc, setDoc, query, where, onSnapshot } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';

const user = auth.currentUser;

if (user !== null) {
  user.providerData.forEach((profile) => {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}

function update(){
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
            alert("Error updating profile");
        }
        );
}

export function UpdateProfile(){
    return (
        <div>
            <div>
                <h2>Update Profile</h2>
                <div className="mb-3">
                    <label htmlFor="displayName">Display Name</label>
                    <input type="text" id="displayName" placeholder="Display Name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="AvatarURL">Avatar URL</label>
                    <input type="text" id="AvatarURL" placeholder="Avatar URL" />
                </div>
                <button onClick={update}>Update Profile</button>
            </div>
        </div>
    )
}

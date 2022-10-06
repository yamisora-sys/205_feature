import firebase from 'firebase/compat/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyDr8EbRu7aCCFfmR5qzCaJKM0ujGwE7tpY",
})

const auth = getAuth();

const signUpWithForm = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        }
        )
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        }
        );
}

const signInWithForm = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

/*firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("User is signed in");
    } else {
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
        console.log("User is signed out");
    }
});*/

export function SignIn(){
    return (
        <div>
            <form>
                <h2>Login</h2>
                <div className="">
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" id="email" className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" id="password" className="form-control"></input>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={signInWithForm}>Log In</button>
                    <button type="button" className="btn btn-primary" onClick={signUpWithForm}>Sign Up</button>
                </div>
            </form>
        </div>
    )
}


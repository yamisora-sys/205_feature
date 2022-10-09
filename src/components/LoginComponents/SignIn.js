import { app, auth } from '../Firebase'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { HomeScreen } from '../../HomeComponents/HomeScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect, useNavigate } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { render } from '@testing-library/react'
import { async } from '@firebase/util'

// const signUpWithForm = () => {
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//         }
//         )
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         }
//         );
// }

const signInWithForm = (setAuthenticated) => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
            console.log('You have successfully logged in!')
            setAuthenticated(true)
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
        })
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

export function SignIn() {
    const [authenticated, setAuthenticated] = useState(
        localStorage.getItem(localStorage.getItem('authenticated') || false)
    )

    const handleSubmit = () => {
        signInWithForm(setAuthenticated)
    }

    // localStorage.clear()

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
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                        Log In
                    </button>
                    <a href="/signup">
                        <button type="button" className="btn btn-primary">
                            Sign Up
                        </button>
                    </a>
                </div>
                {authenticated && <Navigate to="/homepage" />}
            </form>
        </div>
    )
}

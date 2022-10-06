import { initializeApp} from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";


initializeApp({
    apiKey: "AIzaSyDr8EbRu7aCCFfmR5qzCaJKM0ujGwE7tpY",
})

function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(provider);
}

function signInWithForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(email, password);
}
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
                    <button type="button" className="btn btn-primary" onClick={signInWithForm}>Login</button>
                    <button type="button" onClick={signInWithGoogle}>Sign in with Google</button>
                </div>
            </form>
        </div>
    )
}

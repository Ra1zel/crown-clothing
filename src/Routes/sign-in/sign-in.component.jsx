import signInWithGooglePopup from "../../Utils/firebase/firebase.utils";
import {createUserDocFromAuth} from "../../Utils/firebase/firebase.utils";

function SignIn(){
    async function logInGoogleUser(){
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }
    return (
        <div>
            <h1>I am the sign-in page.</h1>
            <button onClick={logInGoogleUser}>Sign in with Google Popup</button>
        </div>
    )
}

export  default SignIn;
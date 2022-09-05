import {initializeApp} from 'firebase/app'
import {signInWithRedirect,signInWithPopup,GoogleAuthProvider,getAuth} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCP5q_G-y5TxSRiYVZJiH0xBDHENgH6KXE",
    authDomain: "crown-clothing-db-852c5.firebaseapp.com",
    projectId: "crown-clothing-db-852c5",
    storageBucket: "crown-clothing-db-852c5.appspot.com",
    messagingSenderId: "269123599913",
    appId: "1:269123599913:web:339e656d4fa551df5ea638"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

const db = getFirestore();
export async function createUserDocFromAuth(userAuth){
    const userDocRef = doc(db,'users',userAuth.uid)
    const userSnapShot = await getDoc(userDocRef);
    if(userSnapShot.exists()=== false){
        const {displayName,email} = userAuth
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            });
        }catch (error){
            console.log('An error occurred while creating the user.', error.message);
        }
    }
    return userDocRef;

}

export const auth = getAuth();

function signInWithGooglePopup () {
  return signInWithPopup(auth,provider);
}
export default signInWithGooglePopup;
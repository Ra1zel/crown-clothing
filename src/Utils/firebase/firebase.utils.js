import {initializeApp} from 'firebase/app'
import {signInWithPopup,GoogleAuthProvider,getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

const db = getFirestore();

async function createUserDocFromAuth(userAuth){
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
const auth = getAuth();

function signInWithGooglePopup () {
  return signInWithPopup(auth,googleProvider);
}
function createAuthUserWithEmailAndPassword(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
}
export  {signInWithGooglePopup,createUserDocFromAuth,auth,createAuthUserWithEmailAndPassword};








import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, remove} from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SEND_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

export function writeUserData(avtorized, email, idToken, token) {
    const db = getDatabase();
    set(ref(db, 'users/'), {
        avtorized: avtorized,
        email: email,
        idToken: idToken,
        token: token
    })
        .then((res) => {
            console.log("this is delete", res)
        })
        .catch(() => alert("this is impossible"))
}

export function writeUserDataUpdate(avtorized, email) {
    const db = getDatabase();
    set(ref(db, 'anotherUsers/'), {
        avtorized: avtorized,
        email: email,
    })
        .then((res) => {
            console.log("this is update", res)
        })
        .catch(() => alert("this is impossible"))
}

export function writeUserDataDelAll() {
    const db = getDatabase();
    const newData = ref(db, 'update')
    remove(newData)
        .then(res => {
            console.log("this is res", res)
        })
        .catch(err => {
            console.error(err)
        })
}


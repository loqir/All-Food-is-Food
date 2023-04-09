import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCiPDi06BbLS529ReuinPW5S1ZIStNsCHo",
    authDomain: "bt3103-989bb.firebaseapp.com",
    projectId: "bt3103-989bb",
    storageBucket: "bt3103-989bb.appspot.com",
    messagingSenderId: "639923907879",
    appId: "1:639923907879:web:714c1e52233a118b29cd02",
    measurementId: "G-WLZ780XPRX"
};

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)

export const auth = getAuth(app)
export const db = getFirestore(app)

export default app;
export { storage }
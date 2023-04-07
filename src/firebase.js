import { initializeApp } from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCiPDi06BbLS529ReuinPW5S1ZIStNsCHo",
    authDomain: "bt3103-989bb.firebaseapp.com",
    projectId: "bt3103-989bb",
    storageBucket: "bt3103-989bb.appspot.com",
    messagingSenderId: "639923907879",
    appId: "1:639923907879:web:714c1e52233a118b29cd02",
    measurementId: "G-WLZ780XPRX"
};

const firebase = initializeApp(firebaseConfig)

const auth = firebase.auth()

export function useAuth() {
    const user = ref(null)
    const unsubscribe = auth.onStateChanged(user => (user.value = _user))
    onUnmounted(unsubscribe)
    const isLogin = computed(() => user.value != null)

    const signIn = async () => {
        const googleProvider = new firebase.authGoogleAuthProvider()
        await auth.signInWithPopup(googleProvider)
    }
    const signOut = () => auth.signOut()

    return{user, isLogin, signIn, signOut}
}

const firestore = firebase.firestore()
const messagesCollection = firestore.collection('messages')
const messageQuery = messagesCollection.orderBy('createdAt', 'desc').limit(100)

export function useChat() {
    const messages = ref([])
    const unsubscribe = messageQuery.onSnapshot(snapshot => {
        messages.value = snapshot.docs
        .map(doc => ({id: doc.id, ...doc.data()}))
        .reverse()
    })
    onUnmounted(unsubscribe)

    const { user, isLogin } = useAuth()
    const sendMessage = text => {
        if (!isLogin.value) return
        const { photoURL, uid, displayName } = user.value
        messagesCollection.add({
            userName: displayName,
            userId: uid,
            userPhotoURL: photoURL,
            text: text,
            createdAt: firebase.firestore.FieldValue.serverTimeStamp()
        })
    }

    return { messages, sendMessage }
}
const app = initializeApp(firebaseConfig);

export default app;
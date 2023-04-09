<template>
    <div style="text-align:center" v-if="user">
        <NavBar/>
        <div>
            <h3><strong> Profile Page </strong></h3>
        </div>
        <div v-if="user">
            <div>
                <img id = "bg" src = "@/assets/logo.svg" style="width:75px;height:75px;border-radius:50%;border:4px solid #333" alt = "">
            </div>
            <div>
                <p> Name: <strong> {{firstName}} {{lastName}}</strong><br/>
                Email: <strong>{{user.email}}</strong><br>
                Uid: <strong>{{user.uid}}</strong><br>
                Phone: <strong>{{phoneNum}}</strong></p>
            </div>
        </div>
        <Logout/>
        <br>
    </div>
</template>

<script>
import Logout from '@/components/Logout.vue'
import NavBar from '@/components/NavBar.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { getFirestore, doc, getDoc } from "firebase/firestore"

export default {
    name: 'Profile',

    components: {
        NavBar,
        Logout
    },

    data() {
        return {
            user: false,
            firstName: "",
            lastName: "",
            phoneNum: ""
        }
    },

    methods: {
        async getData(uid) {
            const buyDocRef = doc(getFirestore(firebaseApp), "buyers", uid);
            const buyDocSnap = await getDoc(buyDocRef);

            const sellDocRef = doc(getFirestore(firebaseApp), "sellers", uid);
            const sellDocSnap = await getDoc(sellDocRef);

            if (buyDocSnap.exists()) {
                console.log("Document data:", buyDocSnap.data());
                this.firstName = buyDocSnap.data().FirstName;
                this.lastName = buyDocSnap.data().LastName;
                this.phoneNum = buyDocSnap.data().Phone;

            } else if (sellDocSnap.exists()) {
                console.log("Document data:", sellDocSnap.data());
                his.firstName = sellDocSnap.data().FirstName;
                this.lastName = sellDocSnap.data().LastName;
                this.phoneNum = sellDocSnap.data().Phone;
            } else {
                console.log("No such document!");
            }
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                this.getData(this.user.uid)
            }
        })
    }
}
</script>
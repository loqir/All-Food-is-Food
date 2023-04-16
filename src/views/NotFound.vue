<template>
    <div style="text-align:center" v-if="user">
        <div v-if="isBuyer">
            <h3>Page Not Found !!</h3>
            <router-link to="/buyerlistings"> Back to Listings </router-link>
            <br>
        </div>
        <div v-else>
            <h3>Page Not Found !!</h3>
            <router-link to="/sellerlistings"> Back to Listings </router-link>
            <br>
        </div>
    </div>
    <div style="text-align:center" v-else>
        <h3>Page Not Found !!</h3>
        <router-link to="/login"> Back to Login </router-link>
        <br>
    </div>
</template>

<script>
import Logout from '../components/Logout.vue';
import NavBar from '../components/commons/NavBar.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from '@/firebase.js'
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"

export default {
    name: "NotFound",

    components: {
        NavBar,
        Logout
    },

    data() {
        return {
            user: false,
            isBuyer: false
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                this.user = user;
                const buyDocRef = doc(getFirestore(firebaseApp), "buyers", this.user.uid);
                const buyDocSnap = await getDoc(buyDocRef);
                if (buyDocSnap.exists()) {
                    this.isBuyer = true;
                }
            }
        })
    }
}
</script>
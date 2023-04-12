<template>
    <div id = "logged" v-if="user">
        <div id = "nav">
            <router-link to = "/sellerlistingview" v-if="isSeller"> Home </router-link>
            <router-link to = "/buyerlistingview" v-else> Home </router-link>
            <router-link to = "/profile"> Profile </router-link>
<!--             <router-link to = "/sellerlistingview"> SellerListing </router-link>
            <router-link to = "/buyerlistingview"> BuyerListing </router-link> -->
            <router-link v-if="isSeller" to = "/sellerchat"> Chat </router-link>
            <router-link v-else to = "/buyerchat"> Chat </router-link>
        </div>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '@/firebase.js'
import { getFirestore, doc, getDoc } from "firebase/firestore"

export default {
    name: 'NavBar',

    data() {
        return {
            user: false,
            isSeller: true,
        }
    },

    methods: {
        async getData(uid) {
            const buyDocRef = doc(getFirestore(firebaseApp), "buyers", uid);
            const buyDocSnap = await getDoc(buyDocRef);

            const sellDocRef = doc(getFirestore(firebaseApp), "sellers", uid);
            const sellDocSnap = await getDoc(sellDocRef);

            if (buyDocSnap.exists()) {
                this.isSeller = false;
                console.log();
            } else if (sellDocSnap.exists()) {
                this.isSeller = true;
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

<style scoped>
#nav {
    padding: 30px;
    text-align: center;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
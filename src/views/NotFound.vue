<template>
    <div style="text-align:center" v-if="user">
        <NavBar/>
        <h3>Page Not Found !! </h3>
        <h4> Please click on the above available options</h4>
        <Logout/>
        <br>
    </div>
</template>

<script>
import Logout from '../components/Logout.vue';
import NavBar from '../components/NavBar.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from '@/firebase.js'

export default {
    name: "NotFound",

    components: {
        NavBar,
        Logout
    },

    data() {
        return {
            user: false
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
            }
        })
    }
}
</script>
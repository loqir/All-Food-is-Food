<template>

</template>

<script>
import Logout from '../components/Logout.vue';
import NavBar from '../components/commons/NavBar.vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseApp from '@/firebase.js'

export default {
    name: "Landing",

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
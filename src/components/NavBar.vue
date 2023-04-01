<template>
    <div id = "logged" v-if="user">
        <div id = "nav">
            <router-link to = "/home"> Home </router-link>
            <router-link to = "/about"> About </router-link>
            <router-link to = "/profit"> Profits </router-link>
            <router-link to = "/profit2"> Profits 2 </router-link>
            <router-link to = "/profile"> Profile </router-link>
            <router-link to = "/sellerlistingview"> SellerListing </router-link>

        </div>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from '@/firebase.js'

export default {
    name: 'NavBar',

    data() {
        return {
            user: false,
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
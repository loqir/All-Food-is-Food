<template>
    <div style="text-align:center" v-if="user">
        <NavBar/>
        <div>
            <h3><strong> This is the Profile Page </strong></h3>
        </div>
        <div v-if="user">
            <div>
                <img id = "bg" src = "@/assets/logo.svg" style="width:75px;height:75px;border-radius:50%;border:4px solid #333" alt = "">
            </div>
            <div>
                <p> Name: <strong> {{user.displayName}}</strong><br/>
                Email:<strong>{{user.email}}</strong><br>
                Uid:<strong>{{user.uid}}</strong><br>
                Provider: <strong>{{user.providerData[0].providerId}}</strong></p>
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

export default {
    name: 'Profile',
    components: {
        NavBar,
        Logout
    },

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
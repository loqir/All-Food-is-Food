<template>
    <input type="email" placeholder="Email" v-model= "email">
    <input type="text" placeholder="Username" v-model= "username">
    <input type="password" placeholder="Password" v-model= "password">

    <button @click="createBuyer"> Submit </button>

</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseApp from '@/firebase.js'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 


export default {
    name: "BuyerRegister",

    data() {
      return {
        email: "",
        password: "",
        username: ""
      }
    },

    methods: {
        async createBuyer() {
            console.log("Creating User");
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(user);

                await setDoc(doc(getFirestore(firebaseApp), "buyers", user.uid), {
                    username: this.username,
                    Email: this.email
                });

                this.$router.push('/home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
            });
        }
    }
}
</script>

<style scoped>
.form-horizontal .control-label{
    text-align: left;
}
</style>
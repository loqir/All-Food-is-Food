<template>
    <input type="email" placeholder="Email" v-model= "email">
    <input type="text" placeholder="Company Name" v-model= "companyname">
    <input type="number" placeholder="UEN" v-model= "uen">
    <input type="password" placeholder="Password" v-model= "password">

    <button @click="createSeller"> Submit </button>

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
    name: "SellerRegister",

    data() {
      return {
        email: "",
        password: "",
        companyname: "",
        uen: ""
      }
    },

    methods: {
        async createSeller() {
            console.log("Creating User");
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(user);

                await setDoc(doc(getFirestore(firebaseApp), "sellers", user.uid), {
                    CompanyName: this.companyname,
                    Email: this.email,
                    UEN: this.uen
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
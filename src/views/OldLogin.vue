<template>
    <div style = "text-align:center;" id = "full">
        <h1 id = "mainHead">All Food Is Food</h1>
        <div id = "pagecontent">
            Bruddas please add front-end code
        </div>
        <div id = "firebaseui-auth-container"></div>
        <h5>copyright@afif-2023</h5>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import firebaseApp from '@/firebase.js'
import { getAuth } from "firebase/auth";


export default {
    name: "Login",

    mounted() {
        var ui = firebaseui.auth.AuthUI.getInstance();

        if (!ui) {
            ui = new firebaseui.auth.AuthUI(getAuth(firebaseApp));
        }

        var uiConfig = {
            signInSuccessUrl: '/home',
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        };

        ui.start("#firebaseui-auth-container", uiConfig)
    }
}
</script>

<style scoped>
#firebaseui-auth-container {
    margin-top: 50px;
    margin-bottom: 50px;
}

#pagecontent {
    height: 100;
    font-size: larger;
    font-weight: bolder;
    text-align: center;
}

#mainHead {
    text-align: center;
    text-shadow: 2px 2px grey;
}

#full {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

h5 {
    text-align: center;
    background-color: rgb(194, 202, 188);
}
</style>
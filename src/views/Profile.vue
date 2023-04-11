<template>
    <div style="text-align:center" v-if="user">
        <NavBar/>
        <ProfileBar/>
        <div>
            <h3 v-if="isBuyer"><strong> Buyer Profile </strong></h3>
            <h3 v-else><strong> Seller Profile </strong></h3>
        </div>
        <div v-if="user">
            <div>
                <img id = "bg" :src="image" style="width:75px;height:75px;border-radius:50%;border:4px solid #333">
            </div>
            <div v-if="isBuyer">
                <p> Name: <strong> {{firstName}} {{lastName}}</strong><br/>
                Email: <strong>{{user.email}}</strong><br>
                Uid: <strong>{{user.uid}}</strong><br>
                Phone: <strong>{{phoneNum}}</strong></p>
            </div>
            <div v-else>
                <p> Company Name: <strong> {{companyName}}</strong><br/>
                Company Email: <strong>{{user.email}}</strong><br>
                Uid: <strong>{{user.uid}}</strong><br>
                UEN: <strong>{{uen}}</strong></p>
            </div>

            <input type = "file" ref ="myfile"> <br>

            <button style = "border:none;" @click ="upload"> Upload </button> <br><br>
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
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import ProfileBar from '@/components/ProfileBar.vue'
import { v4 as uuidv4 } from 'uuid'
import { storage } from "../firebase"
import { ref,uploadBytes } from "firebase/storage"
import { getDownloadURL } from "firebase/storage"

export default {
    name: 'Profile',

    components: {
        NavBar,
        Logout,
        ProfileBar
    },

    data() {
        return {
            user: false,
            isBuyer: true,
            firstName: "",
            lastName: "",
            phoneNum: "",
            uen: "",
            companyName: "",
            image: ""
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
                this.image = buyDocSnap.data().ProfilePic;

            } else if (sellDocSnap.exists()) {
                this.isBuyer = false;
                console.log("Document data:", sellDocSnap.data());
                // this.firstName = sellDocSnap.data().FirstName;
                this.companyName = sellDocSnap.data().CompanyName;
                this.uen = sellDocSnap.data().UEN;
            } else {
                console.log("No such document!");
            }
        },

        async upload() {
            const fileId = uuidv4();
            const fileName = `${fileId}_${this.$refs.myfile.files[0].name}`;
            const storageRef = ref(storage, `images/${fileName}`);
            try {
                await uploadBytes(storageRef, this.$refs.myfile.files[0]);
                console.log("uploaded");
                const downloadURL = await getDownloadURL(storageRef);
                this.image = downloadURL;
                console.log(this.image);

                const uid = this.user.uid;

                const buyDocRef = doc(getFirestore(firebaseApp), "buyers", uid);
                const buyDocSnap = await getDoc(buyDocRef);

                const sellDocRef = doc(getFirestore(firebaseApp), "sellers", uid);
                const sellDocSnap = await getDoc(sellDocRef);

                if (buyDocSnap.exists()) {
                    await updateDoc(buyDocRef, {ProfilePic: downloadURL})
                } else if (sellDocSnap.exists()) {
                    await updateDoc(sellDocRef, {ProfilePic: downloadURL})
                }
                
            } catch (error) {
                console.log(error);
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
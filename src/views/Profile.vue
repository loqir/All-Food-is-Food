<template>
    <div style="text-align:center" v-if="user">
        <NavBar/>
        <div>
            <h3 v-if="isBuyer"><strong> Buyer Profile </strong></h3>
            <h3 v-else><strong> Seller Profile </strong></h3>
        </div>
        <div v-if="user" class = "row">
            <div>
                <img id = "bg" :src="image" style="width:75px;height:75px;border-radius:50%;border:4px solid #333">
                <button @click="clickedProfile"> Change Profile Picture <br> </button>
                <div v-if="changePic">
                    <input type = "file" ref ="myfile" > <br>
                    <button style = "border:none;" @click ="upload"> Upload </button>
                </div>
            </div> <br> 

            <div v-if="isBuyer">
                <p> First Name: <strong> {{firstName}}</strong><br/>
                <button @click="clickedFirstName"> Change First Name <br> </button>
                <div v-if="changeFirstName">
                    <input type = "text" placeholder="First Name" v-model="newFirstName">
                    <button style = "border:none;" @click ="uploadFirstName"> Submit </button>
                </div> <br> 

                Last Name: <strong>{{lastName}}</strong><br/>
                <button @click="clickedLastName"> Change Last Name <br> </button>
                <div v-if="changeLastName">
                    <input type = "text" placeholder="Last Name" v-model="newLastName">
                    <button style = "border:none;" @click ="uploadLastName"> Submit </button>
                </div> <br> <br>

                Email: <strong>{{user.email}}</strong><br>
                Uid: <strong>{{user.uid}}</strong><br>

                Phone: <strong>{{phoneNum}}</strong></p>
                <button @click="clickedNum"> Change HP <br> </button>
                <div v-if="changeNum">
                    <input type = "text" placeholder="New Number" v-model="newNum">
                    <button style = "border:none;" @click ="uploadNum"> Submit </button>
                </div> <br> <br>
            </div>
            <div v-else>
                <p> Company Name: <strong> {{companyName}}</strong><br/>
                Company Email: <strong>{{user.email}}</strong><br>
                Uid: <strong>{{user.uid}}</strong><br>
                UEN: <strong>{{uen}}</strong></p>
            </div>
        </div>
        <Logout/>
        <br>
    </div>
</template>

<script>
import Logout from '@/components/Logout.vue'
import NavBar from '@/components/commons/NavBar.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import ProfileBar from '@/components/commons/ProfileBar.vue'
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
            image: "",
            changePic: false,
            changeFirstName: false,
            changeLastName: false,
            changeNum: false,
            newFirstName: "",
            newLastName: "",
            newNum: ""
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
                this.$router.go(0);
                
            } catch (error) {
                console.log(error);
            }
        },

        clickedProfile() {
            this.changePic = !this.changePic;
        },

        clickedFirstName() {
            this.changeFirstName = !this.changeFirstName;
        },

        clickedLastName() {
            this.changeLastName = !this.changeLastName;
        },

        clickedNum() {
            this.changeNum = !this.changeNum;
        },

        async uploadFirstName() {
            const buyDocRef = doc(getFirestore(firebaseApp), "buyers", this.user.uid);
            const buyDocSnap = await getDoc(buyDocRef);

            if (buyDocSnap.exists()) {
                await updateDoc(buyDocRef, {FirstName: this.newFirstName})
                this.$router.go(0);
            }
        },

        async uploadLastName() {
            const buyDocRef = doc(getFirestore(firebaseApp), "buyers", this.user.uid);
            const buyDocSnap = await getDoc(buyDocRef);

            if (buyDocSnap.exists()) {
                await updateDoc(buyDocRef, {LastName: this.newLastName})
                this.$router.go(0);
            }
        },

        async uploadNum() {
            const buyDocRef = doc(getFirestore(firebaseApp), "buyers", this.user.uid);
            const buyDocSnap = await getDoc(buyDocRef);

            if (buyDocSnap.exists()) {
                await updateDoc(buyDocRef, {Phone: this.newNum})
                this.$router.go(0);
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
<template>
  <div class="profile-page">
    <div class="container">
      <div class="main-display">
        <img src="../assets/logo.png" class="logo">
        <SearchBar2 :searchEntry = "searchEntry" @findfood = "childcall($event)"/>
        <SideBar class="sidebar" v-if="isBuyer"/>
        <SellerSideBar class="sidebar" v-else/>
        <ProfileBar id="pb"/>
      </div>
    <div class="component-2">
    <div class="online-order" v-if="isBuyer">
      <p class="edit-profile">Edit Profile</p>
      <div class="edit1">
        <p class="first-name">First Name</p>
        <button class="edit" @click="clickedFirstName">Edit</button>
      </div>
      <div v-if="changeFirstName">
          <input type = "text" :placeholder="firstName" v-model="newFirstName">
          <button class="edit" @click ="uploadFirstName"> Submit </button>
          <br> <br>
      </div>
      <div class="edit1"> 
        <p class="first-name">Last Name</p>
        <button class="edit" @click="clickedLastName">Edit</button>
      </div >
      <div v-if="changeLastName">
                    <input type = "text" :placeholder="lastName" v-model="newLastName">
                    <button class="edit" @click ="uploadLastName"> Submit </button>
        <br><br>
      </div>
      <div class="edit1">
        <p class="first-name">Mobile No.</p>
        <button class="edit" @click="clickedNum">Edit</button>
      </div>
      <div v-if="changeNum">
        <input type = "text" :placeholder="phoneNum" v-model="newNum">
        <button class="edit" @click ="uploadNum"> Submit </button>
        <br> <br>
      </div>
      <div class="edit1">
        <p class="first-name">Email</p>
        <button class="edit" @click="clickedEmail">Edit</button>
      </div>
      <div v-if="changeEmail">
        <input type = "text" :placeholder="user.email" v-model="newEmail">
        <button class="edit" @click ="uploadEmail"> Submit </button>
        <br> <br>
      </div>
      <div class="edit1" @click="clickedProfile">
        <p class="first-name">Profile Picture</p>
        <button class="edit">Edit</button>
      </div>
      <div v-if="changePic">
            <input type = "file" ref ="myfile" > <br> <br>
            <button class="edit" @click ="upload"> Upload </button>
        </div>
    </div>
    <div class="online-order" v-else>
      <p class="edit-profile">Edit Profile</p>
      <div class="edit1">
        <p class="first-name">Company Name</p>
        <button class="edit" @click="clickedCompanyName">Edit</button>
      </div>
      <div v-if="changeCompanyName">
          <input type = "text" :placeholder="companyName" v-model="newCompanyName">
          <button class="edit" @click ="uploadCompanyName"> Submit </button>
        <br><br>
      </div>
      <div class="edit1">
        <p class="first-name"> Company Email</p>
        <button class="edit" @click="clickedEmail">Edit</button>
      </div>
      <div v-if="changeEmail">
        <input type = "text" :placeholder="user.email" v-model="newEmail">
        <button class="edit" @click ="uploadEmail"> Submit </button>
        <br> <br>
      </div>
      <div class="edit1">
        <p class="first-name">UEN</p>
        <button class="noedit" @click="clickedUEN">Edit</button>
      </div>
      <div v-if="changeUEN">
          <h5>UEN: {{uen}}</h5>
          Please contact our support team to update UEN.
        <br><br>
      </div>
      <div class="edit1">
        <p class="first-name">Staff Name</p>
        <button class="edit" @click="clickedStaffName">Edit</button>
      </div>
      <div v-if="changeStaffName">
          <input type = "text" :placeholder="staffName" v-model="newStaffName">
          <button class="edit" @click ="uploadStaffName"> Submit </button>
        <br><br>
      </div>
      <div class="edit1" @click="clickedProfile">
        <p class="first-name">Profile Picture</p>
        <button class="edit">Edit</button>
      </div>
      <div v-if="changePic">
            <input type = "file" ref ="myfile" > <br> <br>
            <button class="edit" @click ="upload"> Upload </button>
        </div>
    </div>
  <div class="group-34519">
    <img
      class="frame-36549"
      :src="image" style="width:115px;height:115px;border-radius:20%;border:0px">
    <div class="frame-37929" v-if="isBuyer">
      <div class="frame-37927">
        <p class="michelle-chong">{{firstName}} {{lastName}}</p>
      </div>
      <div class="frame-37927">
        <p class="buyer">Buyer</p>
        <p class="buyer">{{user.email}}</p>
      </div>
    </div>

    <div class="frame-37929" v-else>
      <div class="frame-37927">
        <p class="michelle-chong">{{companyName}} [{{staffName}}]</p>
      </div>
      <div class="frame-37927">
        <p class="buyer">Seller</p>
        <p class="buyer">{{user.email}}</p>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>

</template>

<script>
import SideBar from './commons/SideBar.vue';
import SellerSideBar from './commons/SellerSideBar.vue';
import SearchBar2 from './commons/SearchBar2.vue';

import Logout from '@/components/Logout.vue'
import NavBar from '@/components/commons/NavBar.vue'
import { getAuth, onAuthStateChanged, updateEmail } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import ProfileBar from '@/components/commons/ProfileBar.vue'
import { v4 as uuidv4 } from 'uuid'
import { storage } from "../firebase"
import { ref,uploadBytes } from "firebase/storage"
import { getDownloadURL } from "firebase/storage"

export default {
  components: { ProfileBar, SideBar, SearchBar2, SellerSideBar},
  name: "ProfilePage",

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
            newNum: "",
            staffName: "",
            newStaffName: "",
            changeStaffName: false,
            newEmail: "",
            changeEmail: false,
            changeCompanyName: false,
            newCompanyName: "",
            changeUEN: false
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
                this.companyName = sellDocSnap.data().CompanyName;
                this.staffName = sellDocSnap.data().StaffName;
                this.uen = sellDocSnap.data().UEN;
                this.image = sellDocSnap.data().ProfilePic;
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

        clickedStaffName() {
            this.changeStaffName = !this.changeStaffName;
        },

        clickedCompanyName() {
            this.changeCompanyName = !this.changeCompanyName;
        },

        clickedNum() {
            this.changeNum = !this.changeNum;
        },

        clickedEmail() {
            this.changeEmail = !this.changeEmail;
        },

        clickedUEN() {
            this.changeUEN = !this.changeUEN;
        },

        async uploadFirstName() {
            const buyDocRef = doc(getFirestore(firebaseApp), "buyers", this.user.uid);
            const buyDocSnap = await getDoc(buyDocRef);

            if (this.newFirstName.length == 0) {
              alert("Please enter a valid First Name")
            } else if (buyDocSnap.exists()) {
                await updateDoc(buyDocRef, {FirstName: this.newFirstName})
                this.$router.go(0);
            }
        },

        async uploadLastName() {
            const buyDocRef = doc(getFirestore(firebaseApp), "buyers", this.user.uid);
            const buyDocSnap = await getDoc(buyDocRef);

            if (this.newLastName.length == 0) {
              alert("Please enter a valid Last Name")
            } else if (buyDocSnap.exists()) {
                await updateDoc(buyDocRef, {LastName: this.newLastName})
                this.$router.go(0);
            }
        },

        async uploadNum() {
            const buyDocRef = doc(getFirestore(firebaseApp), "buyers", this.user.uid);
            const buyDocSnap = await getDoc(buyDocRef);

            if (this.newNum.length < 8 || (this.newNum.charAt(0) != 8 && this.newNum.charAt(0) != 9 && this.newNum.charAt(0) != 6)) {
              alert("Please enter a valid Phone Number")
            } else if (buyDocSnap.exists()) {
                await updateDoc(buyDocRef, {Phone: this.newNum})
                this.$router.go(0);
            }
        },

        async uploadStaffName() {
            const sellDocRef = doc(getFirestore(firebaseApp), "sellers", this.user.uid);
            const sellDocSnap = await getDoc(sellDocRef);

            if (sellDocSnap.exists()) {
                await updateDoc(sellDocRef, {StaffName: this.newStaffName})
                this.$router.go(0);
            }
        },

        async uploadCompanyName() {
            const sellDocRef = doc(getFirestore(firebaseApp), "sellers", this.user.uid);
            const sellDocSnap = await getDoc(sellDocRef);

            if (sellDocSnap.exists()) {
                await updateDoc(sellDocRef, {CompanyName: this.newCompanyName})
                this.$router.go(0);
            }
        },

        async uploadEmail() {
            const buyDocRef = doc(getFirestore(firebaseApp), "buyers", this.user.uid);
            const buyDocSnap = await getDoc(buyDocRef);

            const sellDocRef = doc(getFirestore(firebaseApp), "sellers", this.user.uid);
            const sellDocSnap = await getDoc(sellDocRef);

            if (sellDocSnap.exists() || buyDocSnap.exists()) {
                await updateEmail(getAuth().currentUser, this.newEmail).then(() => {
                  this.$router.go(0);
                }).catch((error) => {
                  const errorCode = error.code;
                  console.log(errorCode);

                  if (errorCode == "auth/email-already-in-use") {
                    alert("Account already exists. Please use another email account.")
                  } else if (errorCode == "auth/invalid-email") {
                    alert("Please enter a valid email.")
                  } else if (errorCode == "auth/requires-recent-login") {
                    alert("Please re-login and try again :)")
                  }
                })
            }
        },
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
.profile-page {
  background-color: rgba(250, 250, 250, 1);
  height: 120vh;
  display: flex;
  align-items: flex-start;
  width: 100vw;
}
.logo {
  align-self: center;
}
#pb {
  width: 20%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  height: 100%;
}
.main-display {
  display: flex;
  align-items: flex-start;
}
.component-2 {
  margin-left: 5vw;
  margin-top: 20vh;
  display: flex;
  flex-direction: row-reverse;
  width: 80vw;
  justify-content: space-around;
  align-items: center;
  align-self: center;
}
.online-order {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  padding: 24px;
  backdrop-filter: blur(42px);
  width: 20vw;
  display: flex;
  flex-direction: column;
}
.edit-profile {
  font-family: "Playfair Display";
  font-size: 23px;
  font-weight: 700;
  line-height: 30px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 20px;
  letter-spacing: 0.46px;
}
.first-name {
  width: 80%;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
  letter-spacing: 0.32px;
  display: inline;
  justify-self: start;
  font-size: 18px;
}
.edit {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0.32px;
  background-color:rgba(234, 106, 18, 1);
  border-radius: 24px;
  width: 70px;
}
.noedit {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color:aliceblue;
  letter-spacing: 0.32px;
  background-color:darkgray;
  border-radius: 24px;
  width: 70px;
}
.group-34519 {
  width: 20vw;
  display: flex;
  align-items: flex-start;
}
.frame-36549 {
  align-self: stretch;
  margin-right: 26px;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.frame-37929 {
  margin-top: 37px;
  display: flex;
  align-items: flex-start;
}
.frame-37927 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.frame-37927:not(:last-of-type) {
  margin-right: 24px;
}
.michelle-chong {
  font-family: "Playfair Display";
  font-size: 23px;
  font-weight: 700;
  line-height: 30px;
  color: rgba(234, 106, 18, 1);
  margin-bottom: 8px;
  letter-spacing: 0.46px;
}
.edit1 {
  width: 100%;
  margin-bottom: 20px;
  height: 20%;
  display: flex;
  text-align: start;
}
.buyer {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
  letter-spacing: 0.32px;
}
.buyer:not(:last-of-type) {
  margin-bottom: 13px;
}
</style>
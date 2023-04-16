<template>
  <div class="buyer-sign-up">
    <img alt="" class="group-34514" src="https://static.overlay-tech.com/assets/6ab62ed5-d048-4601-b7a5-07a1d0d95aec.svg"/>
    <div class="sign-up-three">
      <img alt="" class="group-33931" src="https://static.overlay-tech.com/assets/8f7cbc9c-52bb-4783-b139-39dee508ad4e.png"/>
      <div class="frame-35384">
        <div class="frame-35383">
          <p class="sign-up"> Welcome to AllFoodISFood!</p>
          <p class="create-your-account"> Please enter your phone number before using our services. </p>
        </div>
        <div class="frame-35364">
                <p class="username-or-email-address">
                </p>
                <input class="email-input" placeholder="Phone Number" type="text" v-model="phone">
              </div> <br>
        <button @click="uploadNum" class="sign-up-two">Submit</button>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseApp from '@/firebase.js'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'vue-router';
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc, collection, getDocs, query, where, updateDoc } from "firebase/firestore"; 
import {signInWithPopup,  GoogleAuthProvider, onAuthStateChanged} from "firebase/auth";


export default {
  name: "GoogleNumber",

  data() {
      return {
        email: "",
        password: "",
        password2: "",
        firstName: "",
        lastName: "",
        phone: "",
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
  },

  methods: {
    async uploadNum() {
      const buyDocRef = doc(getFirestore(firebaseApp), "buyers", this.user.uid);
      const buyDocSnap = await getDoc(buyDocRef);

      if (this.phone.length < 8 || (this.phone.charAt(0) != 8 && this.phone.charAt(0) != 9 && this.phone.charAt(0) != 6)) {
        alert("Please enter a valid Phone Number")
      } else if (buyDocSnap.exists()) {
          await updateDoc(buyDocRef, {Phone: this.phone})
          this.$router.push('/buyerlistings');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.buyer-sign-up {
  background-color: rgba(255, 255, 255, 1);
  padding: 1px 67.45px 50px 0;
  position: relative;
}
.group-34514 {
  width: 100vw;
  height: 100vh;
  margin-left: -3.05px;
  position: relative;
}
.sign-up-three {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 30vw;
  left: 35vw;
  top: 1vh;
}
.group-33931 {
  max-width: 100%;
  height: auto;
  margin-bottom: 24px;
}
.frame-35384 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.frame-35383 {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sign-up {
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 16px;
  letter-spacing: 0.8px;
}
.create-your-account {
  font-family: "Poppins";
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
  letter-spacing: 0.32px;
}
.frame-35544 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
}
.frame-35366 {
  display: flex;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
}
.frame-35364 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-right: 16px;
  }
}
.username-or-email-address {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(149, 152, 149, 1);
  margin-bottom: 8px;
  letter-spacing: 0.32px;
}
.email-input {
  width: 15vw;
  height: 3vh;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 24px;
  padding: 8px 16px;
  border: 1px solid rgba(234, 106, 18, 1);
}
.frame-35356 {
  background-color: rgba(234, 106, 18, 1);
  margin-bottom: 24px;
  border-radius: 44px;
  padding: 7px 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(234, 106, 18, 1);
}
.sign-up-two {
  background-color: rgba(234, 106, 18, 1);
  width: 140px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  letter-spacing: 0.32px;
  margin-bottom: 24px;
  border-radius: 44px;
  padding: 7px 23px;
}
.username-or-email-address-two {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 16px;
  letter-spacing: 0.32px;
}
.socail-links {
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
}
.facebook {
  width: 24px;
  height: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 16, 41, 0.1);
  &:not(:last-of-type) {
    margin-right: 24px;
  }
}
.gmail {
  background-color: rgba(255, 255, 255, 1);
  margin-right: 24px;
  border-radius: 64px;
  padding: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 16, 41, 0.1);
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
}
.union {
  width: 16px;
  height: 16px;
}
.already-have-an-account-sign-in {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
}
.already-have-an-account-sign-in-emphasis-1 {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(234, 106, 18, 1);
  letter-spacing: 0.32px;
}
</style>
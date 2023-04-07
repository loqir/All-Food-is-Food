<template>
  <div class="seller-sign-up">
    <img
      alt=""
      class="group-34514"
      src="https://static.overlay-tech.com/assets/5eb420fb-be90-4a00-832e-3f02eaf92512.svg"
    />
    <div class="sign-up-three">
      <img
        alt=""
        class="group-33931"
        src="https://static.overlay-tech.com/assets/af5fdda7-ee3f-4e47-811c-3950454b2f1a.png"
      />
      <div class="frame-35384">
        <div class="frame-35383">
          <p class="sign-up">Sign Up</p>
          <p class="create-your-account">
            Create your account
          </p>
        </div>
        <div class="frame-35384">
          <div class="frame-35544">
            <div class="frame-35366">
              <div class="frame-35364">
                <p class="username-or-email-address">
                  Company Name
                </p>
                <input class="email-input" type="text" placeholder="Company Name">
              </div>
              <div class="frame-35364">
                <p class="username-or-email-address">
                  Staff Name
                </p>
                <input class="email-input" type="text" placeholder="Staff Name">
              </div>
            </div>
            <div class="frame-35366">
              <div class="frame-35364">
                <p class="username-or-email-address">
                  Email
                </p>
                <input class="email-input" type="email" placeholder="Email" v-model="email">
              </div>
              <div class="frame-35364">
                <p class="username-or-email-address">
                  Company UEN
                </p>
                <input class="email-input" type="number" placeholder="UEN" v-model="uen">
              </div>
            </div>
            <div class="frame-35366">
              <div class="frame-35364">
                <p class="username-or-email-address">
                  Password
                </p>
                <input class="email-input" placeholder="Password" type="password" v-model="password">
              </div>
              <div class="frame-35364">
                <p class="username-or-email-address">
                  Confirm password
                </p>
                <input class="email-input" placeholder="Confirm Password" type="password">
              </div>
            </div>
          </div>
          <button @click="createSeller" class="sign-up-two">Create Account</button>
          <p class="already-have-an-account-sign-in">
            Already have an Account?
            <strong
              class="already-have-an-account-sign-in-emphasis-1"
            >
            <router-link to="/login">Sign In</router-link></strong
            >
          </p>
        </div>
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
import { doc, setDoc } from "firebase/firestore"; 

export default {
  name: "SellerSignUp",

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
};
</script>

<style lang="scss" scoped>
.seller-sign-up {
  background-color: rgba(255, 255, 255, 1);
  padding: 180.65px 67.45px 574.66px 0;
  position: relative;
}
.group-34514 {
  width: 1855.6px;
  height: 324.69px;
  margin-left: -3.05px;
  position: relative;
}
.sign-up-three {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 667px;
  top: 217px;
}
.group-33931 {
  width: 328px;
  height: 58px;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(149, 152, 149, 1);
  letter-spacing: 0.32px;
}
.frame-35544 {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 216px;
  height: 15px;
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
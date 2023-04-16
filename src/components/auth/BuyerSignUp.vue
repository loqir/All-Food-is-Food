<template>
  <div class="buyer-sign-up">
    <img
      alt=""
      class="group-34514"
      src="https://static.overlay-tech.com/assets/6ab62ed5-d048-4601-b7a5-07a1d0d95aec.svg"
    />
    <div class="sign-up-three">
      <img
        alt=""
        class="group-33931"
        src="https://static.overlay-tech.com/assets/8f7cbc9c-52bb-4783-b139-39dee508ad4e.png"
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
                  First Name
                </p>
                <input class="email-input" type="text" placeholder="First Name" v-model="firstName">
              </div>
              <div class="frame-35364">
                <p class="username-or-email-address">
                  Last Name
                </p>
                <input class="email-input" placeholder="Last Name" v-model="lastName">
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
                  Phone No.
                </p>
                <input class="email-input" placeholder="Phone No." type="tel" pattern="[0-9]{8}" v-model="phone">
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
                <input class="email-input" placeholder="Confirm Password" type="password" v-model="password2">
              </div>
            </div>
          </div>
            <button @click="createBuyer" class="sign-up-two">Submit</button>
          <div class="frame-35544">
            <p class="username-or-email-address-two">
              or sign up with Google
            </p>
              <div class="socail-links">
                <input class="union" type="image" src="https://static.overlay-tech.com/assets/63a48114-e7f9-4446-93de-56ea1cd1922b.png" @click="googoSignIn"/>
              </div>
            </div>
            <p class="already-have-an-account-sign-in">
              Already have an Account?
              <strong
                class="already-have-an-account-sign-in-emphasis-1">
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
import { doc, setDoc, getDoc, collection, getDocs, query, where } from "firebase/firestore"; 
import {signInWithPopup,  GoogleAuthProvider } from "firebase/auth";


export default {
  name: "BuyerSignUp",

  data() {
      return {
        email: "",
        password: "",
        password2: "",
        firstName: "",
        lastName: "",
        phone: "",
      }
    },

  methods: {
        googoSignIn() {
          const auth = getAuth();
          const provider = new GoogleAuthProvider();
          signInWithPopup(auth, provider)
            .then(async (result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              const buyDocRef = doc(getFirestore(firebaseApp), "buyers", user.uid);
              const buyDocSnap = await getDoc(buyDocRef);

              const sellDocRef = doc(getFirestore(firebaseApp), "sellers", user.uid);
              const sellDocSnap = await getDoc(sellDocRef);

              if (buyDocSnap.exists()) {
                alert("Buyer Account already exists. Please login instead.")
                this.$router.push("/login");
              } else if (sellDocSnap.exists()) {
                alert("Email already used for a Seller Account.")
                this.$router.go(0);
              } else {
                await setDoc(doc(getFirestore(firebaseApp), "buyers", user.uid), {
                  FirstName: user.displayName.split(" ").at(0),
                  LastName: user.displayName.split(" ").at(1),
                  Phone: user.phoneNumber,
                  Email: user.email,
                  ProfilePic: "https://firebasestorage.googleapis.com/v0/b/bt3103-989bb.appspot.com/o/images%2Fusersial.png?alt=media&token=0f7958a1-2621-4eeb-bb29-79ae437a8aa4"
                });
                this.$router.push("/googlenumber")
              }
              // IdP data available using getAdditionalUserInfo(result)
              // ...
            }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
            });
        },

        async createBuyer() {
          const buyersRef = collection(getFirestore(firebaseApp), "buyers");
          const q = query(buyersRef, where("Email", "==", this.email))
          const qSnapshot = await getDocs(q);

          const sellersRef = collection(getFirestore(firebaseApp), "sellers");
          const q2 = query(sellersRef, where("Email", "==", this.email));
          const qSnapshot2 = await getDocs(q2);

          if (qSnapshot.docs.length > 0 || qSnapshot2.docs.length > 0) {
            alert("Email already linked to an existing account!")
          } else if (this.password != this.password2) {
            alert("Passwords do not match. Please try again.")
          } else if (this.email == "" || this.firstName == "" || this.lastName == "" || this.password == "" || this.password2 == "" || this.phone == "") {
            alert("Please enter all required details.")
          } else if (this.phone.length < 8 || (this.phone.charAt(0) != 8 && this.phone.charAt(0) != 9 && this.phone.charAt(0) != 6)) {
            alert("Please enter a valid handphone number.")
          } else {
            console.log("Creating User");
            const auth = getAuth();
            await createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                console.log(user);

                await setDoc(doc(getFirestore(firebaseApp), "buyers", user.uid), {
                    FirstName: this.firstName,
                    LastName: this.lastName,
                    Phone: this.phone,
                    Email: this.email,
                    ProfilePic: "https://firebasestorage.googleapis.com/v0/b/bt3103-989bb.appspot.com/o/images%2Fusersial.png?alt=media&token=0f7958a1-2621-4eeb-bb29-79ae437a8aa4"
                });

                this.$router.push('/buyerlistings')
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
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(149, 152, 149, 1);
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
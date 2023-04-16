<template>
  <div class="login">
    <img
      alt=""
      class="group-34514"
      src="https://static.overlay-tech.com/assets/40279d73-fe01-482d-ad09-d71081b91186.svg"
    />
    <div class="sign-in-three">
      <p class="all-food-is-food">AllFoodIsFood</p>
      <div class="frame-35535">
        <div class="frame-35355">
          <p class="sign-in">Sign In</p>
          <div class="frame-35535">
            <div class="frame-35353">
              <div class="frame-35532">
                <p class="username-or-email-address">
                  Email
                </p>
                  <input type="email" placeholder="Enter Email" class="email-input" v-model="email">
              </div>
              <div class="frame-35532">
                <p class="username-or-email-address">
                  Password
                </p>
                <input type="password" placeholder="Enter Password" class="email-input" v-model="password">
              </div>
              <div class="frame-449">
                <div class="frame-448">
                  <div class="checkbox-2">
                    <input type="checkbox" class="tick">
                  </div>
                  <p class="password">Remember me?</p>
                </div>
                <router-link class="password-two" to="/passwordreset">Forget Password</router-link>
              </div>
            </div>
            <button @click="logIn" class="sign-in-two">Sign in</button>
          </div>
        </div>
        <div class="frame-35355">
          <p class="username-or-email-address-two">
            or sign in with Google
          </p>
          <div class="gmail">
            <input class="union" type="image" src="https://static.overlay-tech.com/assets/63a48114-e7f9-4446-93de-56ea1cd1922b.png" @click="googoSignIn"/>
          </div>
          <p class="dont-have-an-account-click-here-to-sig">
            Don't have an account?
            <strong
              class="dont-have-an-account-click-here-to-sig-emphasis-1">
              <router-link to="/buyersignup">Sign Up</router-link></strong
            >
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from '@/firebase.js'
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import {signInWithPopup,  GoogleAuthProvider } from "firebase/auth";

export default {
  name: "LogIn",

  data() {
      return {
        email: "",
        password: "",
        isBuyer: true
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

              if (sellDocSnap.exists()) {
                alert("Email is linked to a Seller Account. Please login with your email and password.")
                this.$router.go(0);
              } else if (buyDocSnap.exists()) {
                console.log(buyDocSnap.data().Phone)
                if (buyDocSnap.data().Phone == null) {
                  this.$router.push("/googlenumber")
                } else {
                  this.$router.push('/buyerlistings')
                }
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
              if (error != null) {
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
              }
            });
        },

        async logIn() {
            console.log("Logging in User");
            const auth = getAuth();
      
            await signInWithEmailAndPassword(auth, this.email, this.password)
            .then(async (userCredential) => {
              const user = userCredential.user;

              const uid = user.uid;

              const buyDocRef = doc(getFirestore(firebaseApp), "buyers", uid);
              const buyDocSnap = await getDoc(buyDocRef);

              const sellDocRef = doc(getFirestore(firebaseApp), "sellers", uid);
              const sellDocSnap = await getDoc(sellDocRef);

              if (sellDocSnap.exists()) {
                  this.isBuyer = false;
              }

              if (this.isBuyer) {
                this.$router.push('/buyerlistings')
              } else {
                this.$router.push('/sellerlistings')
              }
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;

              console.log(errorMessage)
              if (errorCode ==  "auth/invalid-email") {
                alert("Invalid Email/Password. Please try again")
              } else if (errorCode ==  "auth/missing-password") {
                alert("Please enter a valid password")
              } else if (errorCode == "auth/wrong-password") {
                alert("Invalid Email/Password. Please try again.")
              }
              // alert(errorCode)

            });
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
  background-color: rgba(255, 255, 255, 1);
  padding: 1px 67.45px 50px 0;
  position: relative;
}
.group-34514 {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.sign-in-three {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 30vw;
  left: 35vw;
  top: 1vh;
}
.all-food-is-food {
  font-family: "Playfair Display";
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  color: rgba(34, 34, 34, 1);
  margin-bottom: 24px;
  letter-spacing: 0.48px;
}
.frame-35535 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.frame-35355 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
}
.sign-in {
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 16px;
  letter-spacing: 0.8px;
}
.frame-35353 {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.frame-35532 {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  width: 21vw;
  height: 3vh;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 24px;
  padding: 8px 16px;
  border: 1px solid rgba(234, 106, 18, 1);
}
.frame-449 {
  width: 21vw;
  display: flex;
  align-items: flex-start;
}
.frame-448 {
  margin-right: 0vw;
  display: inline-flex;
  width: 13vw;
}
.checkbox-2 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2px;
  display: flex;
  align-items: center;
  margin-right: 1vw;
}
.tick {
  width: 14px;
  height: 14px;
}
.password {
  font-family: "Poppins";
  text-align: start;
  width: 8vw;
  padding-top: 15px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(149, 152, 149, 1);
  letter-spacing: 0.32px;
}
.password-two {
  font-family: "Poppins";
  width: 8vw;
  text-align: end;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(234, 106, 18, 1);
  letter-spacing: 0.32px;
  margin-top: 17px;
}
.frame-35356 {
  background-color: rgba(234, 106, 18, 1);
  border-radius: 24px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign-in-two {
  background-color: rgba(234, 106, 18, 1);
  padding: 8px 24px;
  border-radius: 24px;
  width: 140px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  letter-spacing: 0.32px;
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
.gmail {
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 16px;
  border-radius: 64px;
  box-shadow: 0 4px 8px 0 rgba(0, 16, 41, 0.1);
  display: flex;
  align-items: flex-start;
}
.union {
  width: 16px;
  height: 16px;
}
.dont-have-an-account-click-here-to-sig {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
}
.dont-have-an-account-click-here-to-sig-emphasis-1 {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(234, 106, 18, 1);
  letter-spacing: 0.32px;
}
</style>
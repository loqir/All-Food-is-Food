<template>
  <div class = "container-center-horizontal">
    <div class="landing-page screen">
      <div class="overlap-group" style="background-image: url('/src/assets/landingpage.jpg')">
          <h1 class="welcome-message">Welcome to AF2, where we cherish all food regardless of appeareance</h1>
          <div class="message-container">
            <div class="valign-text-middle">
              <p class="sign">Don't have an account? Click here to sign up!</p>
              <div class="buttonC">
                <button class="bt" @click="redirectToBuyerSignUp">Buyer</button>
                <button class="bt" @click="redirectToSellerSignUp">Seller</button>
              </div>
            </div>
            <div class="valign-text-middle">
              <p class="sign">Already a registered user? Sign in here!</p>
              <div class="buttonC">
                <button class="bt" @click="redirectToLogin">Sign in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged, updateEmail } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"

  export default {
    name: "LandingPage",

    props: [
      "overlapGroup",
      "welcomeToAf2",
      "joinUsNowSignUpAs",
      "signInHere",
      "button1",
      "button2",
      "button3",
    ],
    methods: {
      redirectToLogin() {
        this.$router.push('/login');
      }, 
      redirectToBuyerSignUp() {
        this.$router.push('/buyersignup');
      },
      redirectToSellerSignUp() {
        this.$router.push('/sellersignup');
      }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            if (user) {
              this.user = user;
              const buyDocRef = doc(getFirestore(firebaseApp), "buyers", this.user.uid);
              const buyDocSnap = await getDoc(buyDocRef);

              const sellDocRef = doc(getFirestore(firebaseApp), "sellers", this.user.uid);
              const sellDocSnap = await getDoc(sellDocRef);

              if (buyDocSnap.exists()) {
                this.$router.push('/buyerlistings')
              } else if (sellDocSnap.exists()) {
                this.$router.push('/sellerlistings')
              }
            }
        })
    }
  };
  </script>

<style scoped>

.landing-page {
  align-items: flex-start;
  display: flex;
  overflow: hidden;
}

.overlap-group {
  align-items: center;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.welcome-message {
  text-align: center;
  align-self: center;
  font-weight: 700;
  letter-spacing: 0.96px;
  line-height: 57.6px;
  width: 750px;
  min-height: 232px;
  color: white;
  font-size: 50px;
}

.message-container {
  align-self: center;
  align-items: center;
  display: flex;
  gap: 188px;
  margin-right: 5px;
  margin-top: 80px;
  min-width: 950px;
}

.bt {
  display: inline;
}

.buttonC {
  display: flex;
  align-self: center;
  gap: 50px;
}

.sign {
  height: 186px;
  letter-spacing: 0.62px;
  line-height: 56px;
  text-align: center;
  width: 370px;
}

.container-center-horizontal {
  display:flex;
  flex-direction: row;
  justify-content: center;
  pointer-events: none;
  width: 100%;
}

.container-center-horizontal > * {
  flex-shrink: 0;
  pointer-events: auto;
}

.valign-text-middle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
}

.screen a {
  display: contents;
  text-decoration: none;
}

p {
  color: white;
}

button {
  align-items: center;
  background-color: #EA6A12;
  color: white;
  border-radius: 24px;
  display: inline;
  justify-content: center;
  padding: 8px 24px;
  position: relative;
  width: fit-content;
}
</style>
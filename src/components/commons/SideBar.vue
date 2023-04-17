<template>
  <div class="sidebar-3">
    <div class="frame-36360">
      <button class="listings" @click="goToListing">Listings</button>
      <button class="profile" @click="goToProfile()">Profile</button>
      <!-- <input class="profile2" type="image" :src="image" @click="goToProfile()"/> -->
      <button class="cart" @click="goToPayment()">Cart</button>
      <button class="chat" @click="goToChat()">Chat</button>
      <button class="logout" @click="signOut()">Logout</button>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore"
import firebaseApp from '@/firebase.js'


export default {
  data() {
        return {
            user:false,
            image: ""
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                this.getProfilePic(this.user.uid);
            }
        }) 
    },

    methods: {
        signOut() {
            const auth = getAuth();
            const user = auth.currentUser;
            signOut(auth, user)
            this.$router.push({name: 'LandingPage'})
        },
        goToProfile() {
          this.$router.push('/profilepage');
        },
        goToListing() {
          this.$router.push('/buyerlistings');
        },
        goToChat() {
          this.$router.push('/buyerchat');
        },
        goToPayment() {
          this.$router.push('/payment');
        },

        async getProfilePic(uid) {
          const buyDocRef = doc(getFirestore(firebaseApp), "buyers", uid);
          const buyDocSnap = await getDoc(buyDocRef);

          const sellDocRef = doc(getFirestore(firebaseApp), "sellers", uid);
          const sellDocSnap = await getDoc(sellDocRef);

          if (buyDocSnap.exists()) {
              this.image = buyDocSnap.data().ProfilePic;
          } else if (sellDocSnap.exists()) {
              this.image = sellDocSnap.data().ProfilePic;
          }
        }
    },

  name: "SideBar"
  
};
</script>

<style lang="scss" scoped>
.sidebar-3 {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 10px 30px 0 rgba(234, 106, 18, 0.05);
  height: 8vh;
  width: 20vw;
}
.frame-36360 {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
.listings {
  background-color: rgba(255, 255, 255, 1);
  height: 8vh;
  margin-right: 20px;
  //background: url("https://static.overlay-tech.com/assets/11373864-b3d7-4a5e-bc22-c1aa9968946f.png");
  border: 0;
}
.profile {
  background-color: rgba(255, 255, 255, 1);
  height: 8vh;
  margin-right: 20px;
  //background: url("https://static.overlay-tech.com/assets/2ae22b5e-3487-497c-8813-491e81f933b4.png");
  border: 0;
}
.cart {
  background-color: rgba(255, 255, 255, 1);
  height: 8vh;
  //background: url("https://static.overlay-tech.com/assets/d7ba3803-0722-4d52-bbed-5a3a64e742cd.png");
  border: 0;
  margin-right: 20px;
}
.chat {
  background-color: rgba(255, 255, 255, 1);
  height: 8vh;
  //background: url("https://static.overlay-tech.com/assets/7600908a-c616-4b27-9a39-fca1036a8a8b.png");
  border: 0;
  margin-right: 20px;
}
.logout {
  background-color: rgba(255, 255, 255, 1);
  height: 8vh;
  //background: url("https://static.overlay-tech.com/assets/c39e4bb5-5490-4628-81d8-66ae6429e792.png");
  border: 0;
  margin-right: 20px;
}

.listings:hover {
  background-color: rgba(234, 106, 18, 1);
  color: white; 
}
.profile:hover {
  background-color: rgba(234, 106, 18, 1);
  color: white; 
}
.cart:hover {
  background-color: rgba(234, 106, 18, 1);
  color: white; 
}
.chat:hover {
  background-color: rgba(234, 106, 18, 1);
  color: white; 
}
.logout:hover {
  background-color: rgba(234, 106, 18, 1);
  color: white; 
}
</style>
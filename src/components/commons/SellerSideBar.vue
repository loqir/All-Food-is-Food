<template>
  <div class="sidebar-3">
    <div class="frame-36360">
      <button class="listings" @click="goToListing()">Listings</button>
      <button class="profile" @click="goToProfile()">Profile</button>
      <button class="chat" @click="goToChat()">Chat</button>
      <button class="logout" @click="signOut()">Logout</button>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
export default {
  data() {
        return {
            user:false
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
          this.$router.push('/sellerlistings');
        },
        goToChat() {
          this.$router.push('/sellerchat');
        }
    },

  name: "SellerSideBar"
  
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
.chat {
  background-color: rgba(255, 255, 255, 1);
  height: 8vh;
  margin-right: 20px;
  //background: url("https://static.overlay-tech.com/assets/7600908a-c616-4b27-9a39-fca1036a8a8b.png");
  border: 0;
}
.logout {
  background-color: rgba(255, 255, 255, 1);
  height: 8vh;
  margin-right: 20px;
  //background: url("https://static.overlay-tech.com/assets/c39e4bb5-5490-4628-81d8-66ae6429e792.png");
  border: 0;
}
.listings:hover {
  background-color: rgba(234, 106, 18, 1);
  color: white; 
}
.profile:hover {
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
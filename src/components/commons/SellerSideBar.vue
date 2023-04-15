<template>
  <div class="sidebar-3">
    <div class="frame-36360">
      <button class="listings" @click="goToListings()"></button>
      <button class="profile" @click="goToProfile()"></button>
      <button class="chat" @click="goToChat()"></button>
      <button class="logout" @click="signOut()"></button>
    </div>
    <img
      alt=""
      class="image-24"
      src="https://static.overlay-tech.com/assets/69b34eb3-3049-4346-b130-ed5bb7891b1d.png"
    />
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
  overflow: hidden;
  padding: 5px 9px 370.41px 10px;
  box-shadow: 0 10px 30px 0 rgba(234, 106, 18, 0.05);
  position: relative;
}
.frame-36360 {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 13px;
  bottom: -19.29px;
}
.listings {
  width: 48px;
  height: 48px;
  margin-bottom: 24px;
  background: url("https://static.overlay-tech.com/assets/11373864-b3d7-4a5e-bc22-c1aa9968946f.png");
  border: 0;
}
.profile {
  width: 48px;
  height: 46.59px;
  margin-bottom: 24px;
  background: url("https://static.overlay-tech.com/assets/2ae22b5e-3487-497c-8813-491e81f933b4.png");
  border: 0;
}
.chat {
  width: 48px;
  height: 48.6px;
  margin-bottom: 24px;
  background: url("https://static.overlay-tech.com/assets/7600908a-c616-4b27-9a39-fca1036a8a8b.png");
  border: 0;
}
.logout {
  width: 57px;
  height: 54.1px;
  margin-bottom: 5px;
  background: url("https://static.overlay-tech.com/assets/c39e4bb5-5490-4628-81d8-66ae6429e792.png");
  border: 0;
}
.image-24 {
  width: 114px;
  height: 67.59px;
}
</style>
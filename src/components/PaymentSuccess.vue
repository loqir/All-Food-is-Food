<template>
  <div class="payment-success-page">
    <SideBar class="sidebar"/>
    <div class="flex-wrapper-one">
      <div class="relative-wrapper-one">
        <SearchBar2/>
        <ProfileBar id="profile-bar"/>

  </div>
    <img
      alt=""
      class="group-34514"
      src="https://static.overlay-tech.com/assets/693481cd-2900-4d9f-a520-d77e458817ec.svg"
    />
    <div class="email">
      <img
        alt=""
        class="group-33931"
        src="https://static.overlay-tech.com/assets/d67615b8-1c25-4bb1-8320-b3fdd87b5a03.png"
      />
      <div class="frame-34429">
        <div class="frame-1567">
          <img
            alt=""
            class="group-33604"
            src="https://static.overlay-tech.com/assets/0022d420-93f5-4033-ab02-61f2503b0593.svg"
          />
          <p class="order-completed">Order Completed !</p>
          <p class="thank-you-for-supporting-our-cause">
            Thank you for supporting our cause.
          </p>
        </div>
        <button class="sign-in-button" @click="redirectToListings">Back to listings</button>
    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileBar from './commons/ProfileBar.vue';
import SideBar from './commons/SideBar.vue';
import SearchBar2 from './commons/SearchBar2.vue';
export default {
  components: { ProfileBar, SideBar, SearchBar2},
  name: "Payment-Success",
  methods: {
    redirectToListings() {
      this.$router.push('/buyerlistingview');
    },
  } 
};
</script>

<style lang="scss" scoped>
.payment-success-page {
  background-color: rgba(250, 250, 250, 1);
  padding-bottom: 10vh;
  display: flex;
  align-items: flex-start;
  width: 100vw;
}
.sidebar {
  width: 130px;
}
#profile-bar {
  width: 20%;
}
#search-bar {
  border: none;
}
#search-bar:focus {
  outline: none;
}
.flex-wrapper-one {
  padding: 1px 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80vw;
}
.relative-wrapper-one {
  margin-bottom: 5vh;
  position: relative;
  align-items: flex-end;
  display: flex;
  width: 90vw;
}
.group-34514 {
  width: 100vw;
  height: 85vh;
  margin-left: -3.05px;
  position: relative;
}
.email {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 30vw;
  left: 35vw;
  top: 1vh;
  margin-top: 20vh;
}
.group-33931 {
  width: 328px;
  height: 58px;
  margin-bottom: 24px;
}
.frame-34429 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.frame-1567 {
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.group-33604 {
  width: 86px;
  height: 91px;
  margin-bottom: 24px;
}
.order-completed {
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 24px;
  letter-spacing: 0.8px;
}
.thank-you-for-supporting-our-cause {
  width: 540px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(149, 152, 149, 1);
  text-align: center;
  letter-spacing: 0.32px;
}
.sign-in-button {
  background-color: rgba(234, 106, 18, 1);
  border-radius: 44px;
  padding: 8px 24px;
  box-shadow: 0 8px 16px 0 rgba(59, 138, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  width: 140px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  letter-spacing: 0.32px;
}
</style>
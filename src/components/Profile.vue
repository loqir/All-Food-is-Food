<template>
  <div class="profile-page">
    <SideBar class="sidebar"/>
    <div class="flex-wrapper-one">
      <div class="relative-wrapper-one">
        <SearchBar2/>
        <ProfileBar id="profile-bar"/>
      </div>
    <div class="component-2">
    <div class="online-order">
      <p class="edit-profile">Edit Profile</p>
      <div class="edit1">
        <p class="first-name">First Name</p>
        <button class="edit">Edit</button>
      </div>
      <div class="edit1"> 
        <p class="first-name">Last Name</p>
        <button class="edit">Edit</button>
      </div >
      <div class="edit1">
        <p class="first-name">Mobile No.</p>
        <button class="edit">Edit</button>
      </div>
      <div class="edit1">
        <p class="first-name">Email</p>
        <button class="edit">Edit</button>
      </div>
      <div class="edit1">
        <p class="first-name">Profile Picture</p>
        <button class="edit">Edit</button>
      </div>
        </div>
  <div class="group-34519">
    <img
      alt=""
      class="frame-36549"
      src="https://static.overlay-tech.com/assets/46557059-07bb-4cdf-9416-67dd8daf3bf5.png"
    />
    <div class="frame-37929">
      <div class="frame-37927">
        <p class="michelle-chong">Michelle Chong</p>
      </div>
      <div class="frame-37927">
        <p class="buyer">Buyer</p>
        <p class="buyer">Hello&#64;gmail.com</p>
      </div>
    </div>
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
  name: "PaymentPage",
}
</script>

<style scoped>
.profile-page {
  background-color: rgba(250, 250, 250, 1);
  height: 100vh;
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
  margin-bottom: 20vh;
  position: relative;
  align-items: center;
  width: 90vw;
  display:flex;

}
.component-2 {
  display: flex;
  flex-direction: row-reverse;
  width: 80vw;
  justify-content: space-around;
  align-items: center;
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
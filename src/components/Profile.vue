<template>
  <div class="profile-page">
    <SideBar class="sidebar"/>
    <div class="flex-wrapper-one">
      <div class="relative-wrapper-one">
        <SearchBar2/>
        <ProfileBar id="profile-bar"/>
      </div>
    <div class="component-2">
    <img
      alt=""
      class="vector-3"
      src="https://static.overlay-tech.com/assets/aeb39485-6055-4ef0-a449-7735ab374bf5.svg"/>
      <img
      alt=""
      class="vector-4"
      src="https://static.overlay-tech.com/assets/deb5c46c-91a8-44f2-aee0-6796f3f03190.svg"
    />
    <div class="online-order">
      <p class="edit-profile">Edit Profile</p>
      <div class="frame-38128">
        <div class="dineline">
          <p class="first-name">First Name</p>
          <div class="frame-37960">
            <p class="edit">Edit</p>
          </div>
        </div>
        <div class="rectangle-1111"></div>
        <div class="dineline">
          <p class="first-name">Last Name</p>
          <div class="frame-37960">
            <p class="edit">Edit</p>
          </div>
        </div>
        <div class="rectangle-1111"></div>
        <div class="dineline">
          <p class="first-name">Mobile No.</p>
          <div class="frame-37960">
            <p class="edit">Edit</p>
          </div>
        </div>
        <div class="rectangle-1111"></div>
        <div class="dineline">
          <p class="first-name">Email</p>
          <div class="frame-37960">
            <p class="edit">Edit</p>
          </div>
        </div>
        <div class="rectangle-1111"></div>
        <div class="dineline">
          <p class="first-name">Profile Picture</p>
          <div class="frame-37960">
            <p class="edit">Edit</p>
          </div>
        </div>
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
#cart{
  width: 60%;
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
  align-items: center;
  width: 90vw;
  display:flex;

}
.component-2 {
  display: flex;
  flex-direction: column;
  width: 80vw;
  text-align: center;
}
.vector-3 {
  width: 107.53%;
  height: 25.08%;
  position: absolute;
  right: -68.5px;
  bottom: -147px;
}
.vector-4 {
  width: 107.53%;
  height: 25.08%;
  position: absolute;
  right: -65.45px;
  bottom: -110.65px;
}
.online-order {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  padding: 24px 24px 126px;
  display: inline-block;
  align-items: center;
  backdrop-filter: blur(42px);
  margin-left: 30vw;
  display: inline-block;
  width: 30vw;
}
.edit-profile {
  font-family: "Playfair Display";
  font-size: 23px;
  font-weight: 700;
  line-height: 30px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 32px;
  letter-spacing: 0.46px;
}
.frame-38128 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 441px;
}
.dineline {
  display: flex;
  align-items: center;
  justify-content: center;
}
.dineline:not(:last-of-type) {
  margin-bottom: 24px;
}
.first-name {
  width: 116px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
  margin-right: 284px;
  letter-spacing: 0.32px;
}
.frame-37960 {
  background-color: rgba(234, 106, 18, 1);
  border-radius: 100px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.edit {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0.32px;
}
.rectangle-1111 {
  width: 454px;
  height: 1px;
  background-color: rgba(251, 225, 208, 1);
  margin-bottom: 24px;
}
.group-34519 {
  width: 10vw;
  display: inline-block;
  align-items: flex-start;
}
.frame-36549 {
  width: 25.64%;
  align-self: stretch;
  margin-right: 26px;
  object-fit: cover;
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
.frame-37926 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.iconly-light-navigation {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.singapore-singapore {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
  letter-spacing: 0.32px;
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
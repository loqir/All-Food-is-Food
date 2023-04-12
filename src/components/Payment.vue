<template>
  <div class="payment-page">
    <SideBar class="sidebar"/>
    <div class="flex-wrapper-one">
      <div class="relative-wrapper-one">
        <div class="navigation-bar">
          <div class="icon-text">
            <div class="iconly-light-search">
              <img
                alt=""
                class="vector"
                src="https://static.overlay-tech.com/assets/55aa4959-8ce7-48c7-8d1e-e843d9c46e20.svg"
              />
            </div>
            <input type="text" placeholder="Search" class="icon-text" id="search-bar">
          </div>
        </div>
        <ProfileBar id="profile-bar"/>
      </div>
      <div class="group-34518">
        <Cart id="cart"/>
        <div class="my-cart-three">
          <p class="make-payment">Make Payment</p>
          <p class="card-number">Card Number</p>
          <div class="icon-text-two"></div>
          <p class="card-number">CV</p>
          <div class="icon-text-two"></div>
          <p class="card-number">Expiry date</p>
          <div class="icon-text-two"></div>
          <div class="checkout-button">
            <div class="frame-37960">
              <p class="confirm">Confirm</p>
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
import Cart from './commons/Cart.vue';
export default {
  components: { ProfileBar, SideBar, Cart },
  name: "PaymentPage"
};
</script>

<style lang="scss" scoped>
.payment-page {
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
#cart{
  width: 70vw;
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
.navigation-bar {
  background-color: rgba(255, 255, 255, 1);
  padding: 16px 70vw 16px 32px;
  box-shadow: 0 10px 30px 0 rgba(234, 106, 18, 0.05);
  position: relative;
  display: inline;
  width: 80vw;
}
.icon-text {
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  border-radius: 24px;
  padding: 7px 15px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(227, 225, 225, 1);
  height: 4vh;
  width: 20vw;
}
.iconly-light-search {
  margin-right: 8px;
  padding: 1.17px 1.17px 1.75px 1.75px;
  display: flex;
  align-items: center;
  width: 11.08px;
  height: 11.08px;
}
.vector {
  flex: 1;
  align-self: stretch;
  object-fit: cover;
}
.group-34518 {
  margin-left: 20px;
  display: flex;
  align-items: flex-start;
}
.my-cart-three {
  width: calc(43.39% - 308px);
  height: calc(99.04% - 150px);
  background-color: rgba(255, 255, 255, 0.6);
  margin-top: 1px;
  border-radius: 24px;
  padding: 24px 284px 126px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  backdrop-filter: blur(42px);
}
.make-payment {
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 43px;
  letter-spacing: 0.8px;
}
.card-number {
  width: 165px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 43px;
  letter-spacing: 0.32px;
}
.icon-text-two {
  width: 177px;
  height: 12px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 43px;
  border-radius: 24px;
  padding: 8px 16px;
  border: 1px solid rgba(227, 225, 225, 1);
}
.checkout-button {
  background-color: rgba(234, 106, 18, 1);
  border-radius: 100px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
}
.frame-37960 {
  background-color: rgba(234, 106, 18, 1);
  border-radius: 100px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.confirm {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: 0.32px;
}
</style>
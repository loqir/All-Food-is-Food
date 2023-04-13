<template>
  <div class="payment-page">
    <SideBar class="sidebar"/>
    <div class="flex-wrapper-one">
      <div class="relative-wrapper-one">
        <SearchBar2/>
        <ProfileBar id="profile-bar"/>
      </div>
      <div class="group-34518">
        <div v-if="uniqueCart.length">
          <div v-for="item in uniqueCart" :key="item.id">
            <Cart :item="item" :quantity="cartQuantities[item.id]" :uniqueCart = "uniqueCart" :cart = "cart" id="cart"/>
          </div>
        </div>
          <div v-else>
            <p>Your cart is empty.</p>
          </div>
        <div class="my-cart-three">
          <p class="make-payment">Make Payment</p>
          <p class="card-number">Card Number</p>
          <input type="tel" class="icon-text-two"/>
          <p class="card-number">CV</p>
          <input type="tel" class="icon-text-two"/>
          <p class="card-number">Expiry date</p>
          <input type="date" class="icon-text-two"/>
          <button class="frame-37960"  @click="redirectToSuccess">Confirm</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import ProfileBar from './commons/ProfileBar.vue';
import SideBar from './commons/SideBar.vue';
import Cart from './commons/Cart.vue';
import SearchBar2 from './commons/SearchBar2.vue';
export default {
  components: { ProfileBar, SideBar, Cart, SearchBar2},
  name: "PaymentPage",
  data() {
    return {
      user: false,
      listings: [],
      buyerID : null,
      cartRef : null,
      cart : [],
      searchEntry : "",
      displayed : []
    }},
  methods: {
    redirectToSuccess() {
      this.$router.push('/paymentsuccess');
    },
  },
  mounted() {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      this.user = user;
      this.cartRef = doc(BuyersCart, this.user.uid);
    }
  })
}
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
  width: 80vw;
}
.my-cart-three {
  width: 40%;
  height: calc(99.04% - 150px);
  background-color: rgba(255, 255, 255, 0.6);
  margin-top: 1px;
  border-radius: 24px;
  padding: 126px 24px 126px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(42px);
  text-align: center;
}
.make-payment {
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 43px;
  letter-spacing: 0.8px;
  text-align: center;
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
.frame-37960 {
  background-color: rgba(234, 106, 18, 1);
  border-radius: 100px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
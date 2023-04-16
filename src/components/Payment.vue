<template>
  <div class="payment-page">
    <SideBar class="sidebar"/>
    <div class="flex-wrapper-one">
      <div class="relative-wrapper-one">
        <SearchBar2/>
        <ProfileBar id="profile-bar"/>
      </div>
      <div class="group-34518">
        <div class="cart2" v-if="uniqueCart.length">
        <div class="cart-container" v-if="uniqueCart.length">
          <div v-for="item in uniqueCart" :key="item.id">
            <Cart :item="item" :quantity="cartQuantities[item.id]" :uniqueCart = "uniqueCart" :cart = "cart" id="cart"/>
          </div>
        </div>
        <div v-if="uniqueCart.length" class="total-amount"> Total: $ {{  totalValue }}
        </div>
      </div>
          <div class="empty" v-else>
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
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { getFirestore, collection, query, getDocs, doc, getDoc } from "firebase/firestore"

const db = getFirestore(firebaseApp)
const AllListings = collection(db, "All Listings")
const BuyersCart = collection(db, 'BuyersCart');

export default {
  components: { ProfileBar, SideBar, Cart, SearchBar2},
  name: "PaymentPage",
  data() {
    return {
      user: false,
      cartRef : null,
      cart : []

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
      getDoc(this.cartRef).then(async (docA) => {
        if (docA.exists()) {
          // Access a specific field in the document data
          this.cart = docA.data().myArrayField;
          console.log("cart not empty")
          for (let i = 0; i < this.cart.length; i++) {
            const listingID = this.cart[i]
            console.log(" LISTING ID IS " + listingID)
            const docRef = doc(AllListings, listingID)
            const docSnapshot = await getDoc(docRef);
            this.cart[i] = docSnapshot.data()
            console.log(this.user.uid)
          }
        } else {
          // Document doesn't exist
          this.cart = []
          console.log("cart empty")
        }
      });
    }
  })
},
computed: {
  uniqueCart() {
    const cartIds = [];
    return this.cart.filter(item1 => {
      if (cartIds.includes(item1.id)) {
        return false;
      } else {
        cartIds.push(item1.id);
        return true;
      }
    });
  },
  cartQuantities() {
    const quantities = {};
    for (const item of this.uniqueCart) {
      if (!quantities.hasOwnProperty(item.id)) {
        quantities[item.id] = this.cart.filter(i => i.id === item.id).length;
      }
    }
    return quantities;
  }
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
  width: 100%;
  margin-bottom: 100px;
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
.group-34518 {
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  width: 80vw; 
}
.empty {
  display: flex;
  flex-direction: column; 
  justify-content: center;
  font-size: 30px;
}
.cart-container{
  width: 50vw;
  height: 600px;
  overflow-x:auto;
  overflow-y: auto;
}
.my-cart-three {
  width: 25%;
  height: calc(99.04% - 150px);
  background-color: rgba(255, 255, 255, 0.6);
  margin-top: 1px;
  border-radius: 24px;
  padding: 26px 24px 26px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(42px);
  text-align: center;
  align-self: end;
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

.total-amount{
  align-self: flex-end;
  margin-top: 20px;
}
</style>
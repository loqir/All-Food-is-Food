<template>
  <div class="payment-page">
    <div class="container">
      <div class="main-display">
        <img src="../assets/logo.png" class="logo">
        <SearchBar2 :searchEntry = "searchEntry" @findfood = "childcall($event)"/>
        <SideBar/>
        <ProfileBar id="pb"/>
      </div>
      <div class="group-34518">
        <div class="cart2" v-if="uniqueCart.length">
          <div class="cart-container" v-if="uniqueCart.length">
            <div v-for="item in uniqueCart" :key="item.id">
              <Cart :item="item" :quantity="cartQuantities[item.id]" @sendtotalvalue = "childcall($event)" :uniqueCart = "uniqueCart" :cart = "cart" id="cart"/>
            </div>
          </div>
        <div v-if="uniqueCart.length" class="total-amount"> Total: $ {{ totalValue }}</div>
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
import { getFirestore, collection, query, getDocs, doc, getDoc, runTransaction, deleteDoc } from "firebase/firestore"

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
      cart : [],
      totalValue : 0,
      uniqueitems : [],
      uniqueqty : []

    }},
  methods: {
    redirectToSuccess() {
      for (let uniqueitem of this.uniqueitems) {
            console.log(uniqueitem.id);
            const qtytodecrease = this.uniqueqty[uniqueitem.id];
            const ABC = doc(db, "All Listings", uniqueitem.id);
            runTransaction(db, async (transaction) => {
            const docSnapshot = await transaction.get(ABC);
            const data = docSnapshot.data();
  
            // Calculate the new value based on the previous value
            const newValue = data.qty - qtytodecrease;
  
            // Update the field
            transaction.update(ABC, { qty: newValue });
});
          }
          deleteDoc(this.cartRef)
      this.$router.push('/paymentsuccess');
    },
    childcall(x) {
  this.totalValue = x
  console.log("DASDS " + this.totalValue)
}
  },
  mounted() {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      this.user = user;
      this.cartRef = doc(BuyersCart, this.user.uid);
      const docA = await getDoc(this.cartRef);
      if (docA.exists()) {
        // Access a specific field in the document data
        this.cart = docA.data().myArrayField;
        console.log("cart not empty");
        for (let i = 0; i < this.cart.length; i++) {
          const listingID = this.cart[i];
          console.log(" LISTING ID IS " + listingID);
          const docRef = doc(AllListings, listingID);
          const docSnapshot = await getDoc(docRef);
          this.cart[i] = docSnapshot.data();
          console.log(this.user.uid);
          this.uniqueitems = this.uniqueCart;
          this.uniqueqty = this.cartQuantities;
        }
      } else {
        // Document doesn't exist
        this.cart = [];
        console.log("cart empty");
      }
    }
  });
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
  height: 120vh;
  display: flex;
  align-items: flex-start;
  width: 100vw;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
}
.logo {
  align-self: center;
}
.main-display {
  display: flex;
  align-items: flex-start;
}
#cart{
  width: 100%;
  height: 200px;
}
#pb {
  width: 20%;
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
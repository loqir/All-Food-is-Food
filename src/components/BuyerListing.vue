<template>
  <div class="buyer-listing">
    <div class="container">
      <div class="main-display">
        <img src="../assets/logo.png" class="logo">
        <SearchBar2 :searchEntry = "searchEntry" @findfood = "childcall($event)"/>
        <SideBar/>
        <ProfileBar id="pb"/>
      </div>
      <div class="content">
        <h1 class="header"> Food Items </h1>
        <div class="listing-cart">
          <div class="listings">
            <ListingBUYERFINAL v-for="listing in filteredListings" :key="listing.id" style="flex-basis: 33.33%;" :listing="listing" class="listing"/>
          </div>
          <div class="cart">
            <div v-if="uniqueCart.length">
              <div v-for="item in uniqueCart" :key="item.id">
                <Cart :item="item" :quantity="cartQuantities[item.id]" :uniqueCart = "uniqueCart" :cart = "cart" class="cart-item"/>
               </div>
              </div>
              <div class="empty" v-else>
                <p>Your cart is empty.</p>
              </div>
            </div>
          </div>
        </div>
        <button class="checkout" @click="goToPayment()">Checkout</button>
    </div>
    </div>
</template>

<script>
import ProfileBar from './commons/ProfileBar.vue';
import SideBar from './commons/SideBar.vue';
import SearchBar2 from './commons/SearchBar2.vue';
import Cart from './commons/Cart.vue'

import ListingBUYERFINAL from '@/components/commons/BuyerListing.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { getFirestore, collection, query, getDocs, doc, getDoc } from "firebase/firestore"

const db = getFirestore(firebaseApp)
const BuyersCart = collection(db, 'BuyersCart');
const AllListings = collection(db, "All Listings")

export default {
  components: { ProfileBar, SideBar, SearchBar2, ListingBUYERFINAL, Cart},
  name: "BuyerListing",
  data() {
    return {
      user: false,
      listings: [],
      buyerID : null,
      cartRef : null,
      cart : [],
      searchEntry : "",
      displayed : []
    }
  },
  methods: {
    goToPayment() {
          this.$router.push('/payment');
        },

    async populatelistingsarray() {
  const queryRef = query(collection(db, 'All Listings'));

  const querySnapshot = await getDocs(queryRef);

  const dataArray = [];
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    dataArray.push(data);
  });
  this.listings = dataArray;
},
childcall(x) {
  this.searchEntry = x
  console.log(this.searchEntry)
}

// async populatecartarray() {
//   const dataArray = [];
//   cartRef.get().then((querySnapshot) => {
//   // Iterate over each document in the collection
//   querySnapshot.forEach((doc) => {
//     // Get the document data
//     const data = doc.data();
//     // Add the data to the list
//     dataArray.push(data);
//   });
//   // The list now contains all the data from the documents
//   console.log("CART"  + dataArray);
// });
//   this.cart = dataArray;
// }
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
          }
        } else {
          // Document doesn't exist
          this.cart = []
          console.log("cart empty")
        }
      });
    }
  })
  this.populatelistingsarray()
},
computed: {
  filteredListings() {
  if (!this.searchEntry) {
    return this.listings;
  }
  return this.listings.filter(listing => {
    return listing.name.toLowerCase().includes(this.searchEntry.toLowerCase());
  });
},
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
}
</script>

<style scoped>
.buyer-listing {
  background-color: rgba(250, 250, 250, 1);
  height: 120vh;
  display: flex;
  align-items: flex-start;
  width: 100vw;
}
.logo {
  align-self: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
}
.content {
  width: 90vw; 
}
.main-display {
  display: flex;
  align-items: flex-start;
}
#pb {
  width: 20%;
}
.listing-cart{
  display:flex;
  justify-content: flex-start;
}
.listings {
  width: 50%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 50%;
  margin-bottom: 40px;
  flex-wrap: wrap;
  overflow-x:auto;
  overflow-y: auto;
  height: 80vh;
  padding: 20px;
}
.listing {
  width: 30%;
  margin: 0;
  align-self: flex-start;
  justify-self: flex-start;
  height: 50%;
}
.header {
  margin: 20px;
  text-align: center;
}
.cart {
  width: 50%;
  height: 80vh;
  overflow-x:auto;
  overflow-y: auto;
  padding: 10px;
}
.cart-item {
  height: 200px;
}
.checkout {
  background-color: rgba(234, 106, 18, 1);
  padding: 5px;
  border-radius: 24px;
  margin-top: 50px;
  align-self: end;
}
.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 32px;
}
</style>>
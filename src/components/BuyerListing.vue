<template>
  <div class="buyer-listing">
    <SideBar class="sidebar"/>
    <div class="flex-wrapper-one">
      <div class="relative-wrapper-one">
        <SearchBar2/>
        <ProfileBar id="profile-bar"/>
      </div>
      <h1 class="header"> Food Items </h1>
      <div class="listing-container" style="flex-grow: 1;">
        <div class="listings" style="display: flex; flex-wrap: wrap;">
          <ListingBUYERFINAL v-for="listing in filteredListings" :key="listing.id" style="flex-basis: 33.33%;" :listing="listing"/>
        </div>
      </div>
    </div>
    <h1>My Cart</h1>    
    <div v-if="uniqueCart.length">
      <div v-for="item in uniqueCart" :key="item.id">
        <Cart :item="item" :quantity="cartQuantities[item.id]" :uniqueCart = "uniqueCart" :cart = "cart" />
      </div>
    </div>
    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
import ProfileBar from './commons/ProfileBar.vue';
import SideBar from './commons/SideBar.vue';
import SearchBar2 from './commons/SearchBar2.vue';
import Cart from './commons/Cart.vue'
import Logout from '@/components/Logout.vue'
import NavBar from '@/components/commons/NavBar.vue'
import SearchBar from '@/components/commons/SearchBar.vue'
import ListingBUYERFINAL from '@/components/commons/ListingBUYERFINAL.vue'
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
  margin-bottom: 5vh;
  position: relative;
  width: 90vw;
  display:flex;
}
.listings {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 50%;
  margin-bottom: 40px;
}

.listing {
  width: 30%;
  margin: 0;
  align-self: flex-start;
  justify-self: flex-start;
  height: 110%;
}

.header {
  text-align: center;
  justify-self: center;
  align-self: center; 
}

.listing-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

</style>>
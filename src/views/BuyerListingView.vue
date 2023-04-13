<template>
  <div style="text-align:center;" v-if="user">
    <NavBar/>
    <SearchBar :searchEntry = "searchEntry" @findfood = "childcall($event)"/>
    <div class="container">
      <div class="left-component">
        <div v-for="listing in filteredListings" :key="listing.id">
          <ListingBuyer :listing="listing"/>
        </div>
      </div>
      <div class="right-component"> 
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
      </div>
    <Logout/> <br><br>
  </div>
</template>
<script>
import Logout from '@/components/Logout.vue'
import NavBar from '@/components/commons/NavBar.vue'
import SearchBar from '@/components/commons/SearchBar.vue'
import Listing from '@/components/Listing.vue'
import ListingBuyer from '@/components/ListingBuyer.vue'
import AddListing from '@/components/AddListing.vue'
import Cart from '@/components/commons/Cart.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { getFirestore, collection, query, getDocs, doc, getDoc } from "firebase/firestore"

const db = getFirestore(firebaseApp)
const BuyersCart = collection(db, 'BuyersCart');
const AllListings = collection(db, "All Listings")

export default {
  name: 'BuyerListingView',
  components: {
    NavBar,
    Logout,
    SearchBar,
    ListingBuyer,
    AddListing,
    Cart
  },
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
.container {
  display: flex;
  justify-content: right;
}
.right-component {
  padding-left: 30vh;
  /* Specify any styles for your right component */
  /* This pushes the right component to the right */
}
</style>
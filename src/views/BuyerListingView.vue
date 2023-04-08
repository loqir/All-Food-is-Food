<template>
  <div style="text-align:center;" v-if="user">
    <NavBar/>
    <SearchBar/>
    <div class="container">
      <div class="left-component">
        <div v-for="listing in listings" :key="listing.id">
          <ListingBuyer :listing="listing"/>
        </div>
      </div>
      <div class="right-component"> 
            <h1>My Cart</h1>    
        <Cart/>
        <Cart/>
      </div>
    </div>
    <Logout/> <br><br>
  </div>
</template>
<script>
import Logout from '@/components/Logout.vue'
import NavBar from '@/components/NavBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import Listing from '@/components/Listing.vue'
import ListingBuyer from '@/components/ListingBuyer.vue'
import AddListing from '@/components/AddListing.vue'
import Cart from '@/components/Cart.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { getFirestore, collection, query, getDocs } from "firebase/firestore"

import { storage } from "../firebase"
import { ref,uploadBytes } from "firebase/storage"
import { getDownloadURL } from "firebase/storage"

const db = getFirestore(firebaseApp)

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
      listings: []
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

  console.log(dataArray);
  this.listings = dataArray;
}
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
      }
    })
    this.populatelistingsarray()
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
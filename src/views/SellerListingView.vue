<template>
    <div style="text-align:center;" v-if="user">
      <NavBar/>
      <div class = "container">
    <div class="left-component">
      <div v-for="sellerListing in sellerListings" :key="sellerListing.id">
        <Listing :sellerListing="sellerListing"/>
</div>
     
    </div>
    <div class="right-component">     
      <AddListing/>
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
  import AddListing from '@/components/AddListing.vue'
  import { getAuth, onAuthStateChanged } from "firebase/auth"
  import firebaseApp from '@/firebase.js'
  import { ref } from 'vue';
  import { doc, getDoc, getFirestore, collection, onSnapshot } from 'firebase/firestore';
  

const db = getFirestore(firebaseApp)
const sellerListings = collection(db, "SellerListings");
const AllListings = collection(db, "All Listings")

  export default {
    name: 'SellerListingView',
    components: {
      NavBar,
      Logout,
      SearchBar,
      Listing,
      AddListing
    },

  

  
    data() {
      return {
        user: false,
        listings : [],
        sellerDocument : null,
        sellerListings : []
      }
    },
  
    mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          const specificSeller = doc(sellerListings, this.user.uid);
          getDoc(specificSeller).then(async (docA) => {
        if (docA.exists()) {
          // Access a specific field in the document data
          this.sellerListings = docA.data().myArrayField;
          console.log("SELLER LISTINGS not empty")
          for (let i = 0; i < this.sellerListings.length; i++) {
            const listingID = this.sellerListings[i]
            console.log(" LISTING ID IS " + listingID)
            const docRef = doc(AllListings, listingID)
            const docSnapshot = await getDoc(docRef);
            this.sellerListings[i] = docSnapshot.data()
          }
        }
        else {
          // Document doesn't exist
          this.sellerListings = []
          console.log("cart empty")
        }})
        }
      })
    }, 
    methods: {
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
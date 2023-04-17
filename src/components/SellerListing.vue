<template>
  <div class="seller-listing">
    <div class="container">
      <div class="main-display">
        <img src="../assets/logo.png" class="logo">
        <SearchBar2 :searchEntry = "searchEntry" @findfood = "childcall($event)"/>
        <SellerSideBar/>
        <ProfileBar id="pb"/>
      </div>
      <div class="content">
        <h1 class="header"> Your listings </h1>
        <div class="listing-add">
          <div class="listings">
            <ListingSELLERFINAL v-for="sellerListing in filteredListings" :key="sellerListing.id" :sellerListing="sellerListing" style="flex-basis: 33.33%;" class="listing"/>
          </div>
          <AddListing/>
        </div>
      </div>
      </div>
      </div>

</template>

<script>
import ProfileBar from './commons/ProfileBar.vue';
import SellerSideBar from './commons/SellerSideBar.vue';
import SearchBar2 from './commons/SearchBar2.vue';
import ListingSELLERFINAL from './commons/SellerListing.vue'
import AddListing from '@/components/AddListing.vue'
import SideBar from '@/components/commons/SideBar.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { doc, getDoc, getFirestore, collection, onSnapshot } from 'firebase/firestore';
  
const db = getFirestore(firebaseApp)
const sellerListings = collection(db, "SellerListings");
const AllListings = collection(db, "All Listings")

export default {

  components: { ProfileBar, SideBar, SearchBar2, 
    ListingSELLERFINAL, AddListing, SellerSideBar},

  name: "SellerListing",
  data() {
      return {
        user: false,
        listings : [],
        sellerDocument : null,
        sellerListings : [],
        searchEntry : "",
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
      childcall(x) {
  this.searchEntry = x
  console.log(this.searchEntry)
}
    },
    computed: {
  filteredListings() {
  if (!this.searchEntry) {
    return this.sellerListings;
  }
  return this.sellerListings.filter(listing => {
    return listing.name.toLowerCase().includes(this.searchEntry.toLowerCase());
  });
}
    }
}      

</script>

<style scoped>
.seller-listing {
  background-color: rgba(250, 250, 250, 1);
  height: 120vh;
  display: flex;
  align-items: flex-start;
  width: 100vw;
}
.logo {
  align-self: center;
}
#pb {
  width: 20%;
}
.content {
  width: 90vw; 
}
.header {
  margin: 20px;
  text-align: center;
  justify-self: center;
  align-self: center; 
}
.listing-add{
  display:flex;
  justify-content: space-around;
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

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
}

.main-display {
  display: flex;
  align-items: flex-start;
}

</style>
<template>
  <div class="seller-listing">
    <SellerSideBar class="sidebar"/>
    <div class="flex-wrapper-one">
      <div class="relative-wrapper-one">
        <SearchBar2/>
        <ProfileBar id="profile-bar"/>
      </div>
      <h1 class="header"> Your Listings </h1>
      <div class="listing-container">
        <div class="listings">
          <div v-for="sellerListing in sellerListings" :key="sellerListing.id">
            <ListingSELLERFINAL :sellerListing="sellerListing"/> 
          </div>
        </div>
      </div>
    </div>
    <div class="add-listing">
      <AddListing/>
    </div>
    </div>

</template>

<script>
import ProfileBar from './commons/ProfileBar.vue';
import SellerSideBar from './commons/SellerSideBar.vue';
import SearchBar2 from './commons/SearchBar2.vue';
import ListingSELLERFINAL from './commons/ListingSELLERFINAL.vue'
import Logout from '@/components/Logout.vue'
import NavBar from '@/components/commons/NavBar.vue'
import SearchBar from '@/components/commons/SearchBar.vue'
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
.seller-listing {
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
  justify-content: center;
  height: 50%;
  margin-bottom: 40px;
}

.listing {
  width: 15%;
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

.listing-container{ 
  width: 100%;
  height: 600px;
  overflow-x:auto;
  overflow-y: auto;
}

</style>
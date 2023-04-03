<template>
    <div style="text-align:center;" v-if="user">
      <NavBar/>
      <SearchBar/>
      <div class = "container">
    <div class="left-component">
      <Listing/>
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
  import NavBar from '@/components/NavBar.vue'
  import SearchBar from '@/components/SearchBar.vue'
  import Listing from '@/components/Listing.vue'
  import AddListing from '@/components/AddListing.vue'
  import { getAuth, onAuthStateChanged } from "firebase/auth"
  import firebaseApp from '@/firebase.js'
  
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
      }
    },
  
    mounted() {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        }
      })
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
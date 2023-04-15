<template>
  <div class="seller-listing">
    <SideBar class="sidebar"/>
    <div class="flex-wrapper-one">
      <div class="relative-wrapper-one">
        <SearchBar2/>
        <ProfileBar id="profile-bar"/>
      </div>
      <h1 class="header"> Your Listings </h1>
      <div class="listing-container">
        <div class="listings">
        <Listing class="listing"/>
        <Listing class="listing"/>
        <Listing class="listing"/>
      </div>
      <div class="listings">
        <Listing class="listing"/>
        <Listing class="listing"/>
        <Listing class="listing"/>
      </div>
      <div class="listings">
        <Listing class="listing"/>
        <Listing class="listing"/>
        <Listing class="listing"/>
      </div>
      </div>
    </div>
    </div>

</template>

<script>
import ProfileBar from './commons/ProfileBar.vue';
import SideBar from './commons/SideBar.vue';
import SearchBar2 from './commons/SearchBar2.vue';
import Listing from './commons/Listing.vue'
export default {
  components: { ProfileBar, SideBar, SearchBar2, Listing},
  name: "SellerListing",
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

</style>>
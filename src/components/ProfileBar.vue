<template>
  <div class="profile">
    <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png" alt="Profile Picture">

    <div class="name">
      <h1> {{ firstName }} {{ secondName }} </h1> 
      <div class = "belowname">
        <router-link class="routerlink" to="/">{{ userType }}</router-link>
      </div>
    </div>
  </div>
</template>

<style>
.profile {
    display: flex;
    align-items: center;
}

.profile img {
  max-width: 20%;  
  height: auto;  
}

.routerlink {
  color: var(--color-text);
  padding: 0.3em;
  display: inline-block;
}


</style>

<script>
import { RouterLink } from 'vue-router'

export default {
  data() {
    return{
      firstName: "Michelle",
      secondName: "Chong",
      userType: "Buyer"
    }
  }
}
</script>
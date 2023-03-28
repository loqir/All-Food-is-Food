<template>
  <div style="text-align:center;" v-if="user">
    <NavBar/>
    <h3>This is an About Page</h3>
    <h2>Welcome to CPP</h2>
    <h3>CPP Description: Remember to stay safe, stay hydrated and practice responsible investing! </h3>
    <Logout/> <br><br>
  </div>
</template>

<script>
import Logout from '@/components/Logout.vue'
import NavBar from '@/components/NavBar.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'

export default {
  name: 'AboutView',
  components: {
    NavBar,
    Logout
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
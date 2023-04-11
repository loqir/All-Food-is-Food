<script>
import Logout from '@/components/Logout.vue'
import NavBar from '@/components/commons/NavBar.vue'
import LandingPage from '@/components/LandingPage.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Logout
  },
  data() {
    return {
      refreshComp: 0
    }
  },
  methods: {
    change() {
      this.refreshComp += 1
    }
  }
}
</script>

<template>
<NavBar/>
<img id = "bg" src = "@/assets/coins.png" alt = "">
<Logout/>
</template>

<style>
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: aliceblue;
  background-size: 100%;
}

#bg {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
</style>

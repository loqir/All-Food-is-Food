<template>
  <div id="app">
    <LandingPage overlapGroup="../assets/landingpage.jpg" signInHere="Already have an account? Sign in here!" joinUsNowSignUpAs="JOIN US NOW! <br /> Sign up as: " welcomeToAf2="Welcome to AF2, where we cherish all food regardless of appearance."/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';


export default {
  name: 'App',
  components: {
    LandingPage
  },
};
</script>


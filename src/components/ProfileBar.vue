<template>
  <div class="profile">
    <img src="" alt="Profile Picture">
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
    return {
      firstName: "",
      secondName: "",
      userType: "Buyer"
    }
  },

  methods: {
        async getData(uid) {
            const buyDocRef = doc(getFirestore(firebaseApp), "buyers", uid);
            const buyDocSnap = await getDoc(buyDocRef);

            const sellDocRef = doc(getFirestore(firebaseApp), "sellers", uid);
            const sellDocSnap = await getDoc(sellDocRef);

            if (buyDocSnap.exists()) {
                console.log("Document data:", buyDocSnap.data());
                this.firstName = buyDocSnap.data().FirstName;
                this.lastName = buyDocSnap.data().LastName;

            } else if (sellDocSnap.exists()) {
                this.isBuyer = false;
                console.log("Document data:", sellDocSnap.data());
                // this.firstName = sellDocSnap.data().FirstName;
                this.companyName = sellDocSnap.data().CompanyName;
                this.uen = sellDocSnap.data().UEN;
            } else {
                console.log("No such document!");
            }
        }
    },

    mounted() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.user = user;
                this.getData(this.user.uid)
            }
        })
    }
}
</script>
<template>
  <div class="user">
    <div class="frame-37292">
      <img id = "bg" :src="image" style="  width: 45px; height: 45px; background-size: 100% 100%; background-position: center; margin-right: 16px; border-radius: 100px;">
    </div>
    <div class="frame-270">
      <p class="austin-robertson">{{ firstName }} {{ lastName }}</p>
      <p class="marketing-administra" v-if="isBuyer">Buyer</p>
      <p class="marketing-administra" v-else>Seller</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8vh;
  width: 11vw;
}
.frame-37292 {
  width: 45px;
  height: 45px;
  margin-right: 16px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
}
#bg {
  width: 45px;
  height: 45px;
  background-size: 100% 100%;
  background-position: center;
  margin-right: 16px;
  border-radius: 100px
}
.frame-270 {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
}
.austin-robertson {
  padding-top: 5px;
  letter-spacing: 0.32px;
  font-size: 16px;
}
.marketing-administra {
  letter-spacing: 0.26px;
  font-size: 13px;
}
</style>

<script>

import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { getFirestore, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"


export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      isBuyer: true,
      image: ""
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
                this.image = buyDocSnap.data().ProfilePic;

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
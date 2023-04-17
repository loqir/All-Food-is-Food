<template>
  <div class="container">
    <div class="image-container">
      <img class="image" 
      :src= listing.image>
    </div>
    <p class="title"> {{ listing.name }}</p>
    <p class="price"> ${{ listing.price }}</p>
    <p class="description"> Description : {{ listing.description }}</p>
    <p class="qty">Qty : {{ listing.qty }} </p>
    <div class="last-row">
      <p class="seller-name"> Seller : {{listing.Seller}}</p>
      <button @click = "addtocart(listing)" class="add"> + </button>
    </div>
    </div>
</template>

<script>
import firebaseApp from '@/firebase.js'
 import {getFirestore} from "firebase/firestore"
 import { doc, getDoc, addDoc, collection, setDoc, updateDoc, arrayUnion} from "firebase/firestore"
 import { getAuth, onAuthStateChanged } from "firebase/auth"

 const db = getFirestore(firebaseApp)
 const buyerscart = collection(db, "BuyersCart");
 export default {
  name: 'ListingREAL',
  props: {
    listing: {
      type: Object,
      required: true
    }
  },
     data() {
      return {
      user: false,
      buyerDocument: null
    }
     },
 
     methods: {
      async addtocart(listing) {
      const listingid = listing.id
  const docSnap = await getDoc(this.buyerDocument);
  if (docSnap.exists()) {
    const currList = docSnap.data().myArrayField || [];
    const counts = currList.reduce((acc, listingid) => {
      acc[listingid] = (acc[listingid] || 0) + 1;
      return acc;
    }, {});
    const listingRef = doc(db, "All Listings", listingid);
    const listingDoc = await getDoc(listingRef);
    const qty = listingDoc.data().qty;
    if (counts[listingid] >= qty) {
      alert("Maximum quantity exceeded");
    } else {
      const newList = [...currList, listing.id];
      await setDoc(this.buyerDocument, { myArrayField: newList });
    }
  } else {
    await setDoc(this.buyerDocument, { myArrayField: [listingid] });
  }

  location.reload();
}
         },
     mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        const specificbuyer = doc(buyerscart, this.user.uid);
        this.buyerDocument = specificbuyer
      }
    })
  }
 }

</script>

<style scoped>
  p {
    margin: 5px;
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 30%;
    border-radius: 24px;
  }
  .container:hover {
    display: flex;
    flex-direction: column;
    color: white;
    background-color: rgba(234, 106, 18, 1);
  }
  .image-container {
    width: 50%;
    height: 50%;
    align-self: center;
    margin-top: 10px;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
  }
  .add {
    width: 25px;
    text-align: center;
    align-self: end;
    border-radius: 20px;
    color: white;
    background-color: coral;
    margin-bottom: 10px;
    margin-right: 10px;
  }
  .last-row {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

</style>
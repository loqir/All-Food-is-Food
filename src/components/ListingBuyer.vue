<template>
    <div class="menu-category-2">
   <div class="spaghetti">
     <div class="spaghetti-details">
       <p class="apple-3pc">{{ listing.name }}</p>
       <p class="rate-2">$ {{ listing.price }}</p>
       <p> Qty : {{ listing.qty }}</p>
     </div>
   </div>
   <img
     alt="IMAGE"
     :src= listing.image
     class="spaghetti-two"
   />
   <button @click = "addtocart(listing)">
   <img
     alt=""
     class="delete-icon"
     src="https://static.overlay-tech.com/assets/e9921e71-ec44-4406-8cd7-3aac4fa3cc95.png"
   />
 </button>
 </div>
 
 <!-- 
 <div>
   <b-card
     title="Card Title"
     img-src="https://picsum.photos/600/300/?image=25"
     img-alt="Image"
     img-top
     tag="article"
     style="max-width: 20rem;"
     class="mb-2"
   >
     <b-card-text>
       Some quick example text to build on the card title and make up the bulk of the card's content.
     </b-card-text>
 
     <b-button href="#" variant="primary">Go somewhere</b-button>
   </b-card>
 </div> -->
 </template>
 
 
 
 <script>
 import firebaseApp from '../firebase.js'
 import {getFirestore} from "firebase/firestore"
 import { doc, addDoc, collection, setDoc, updateDoc, arrayUnion} from "firebase/firestore"
 import { getAuth, onAuthStateChanged } from "firebase/auth"

 const db = getFirestore(firebaseApp)
 const buyerscart = collection(db, "BuyersCart");



 export default {
  name: 'ListingBuyer',
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
//           const listy = this.buyerDocument
//           if (listy.includes(listing.id)) {
//             await updateDoc(this.buyerDocument, {
//     myArrayFieldLISTINGS: arrayUnion(listing.id)
// }

//             )}
          await setDoc(this.buyerDocument, {
    myArrayField: arrayUnion(listing.id)
}, { merge: true });
console.log("ADDED TO CART  ")
location.reload()
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
  .menu-category-2 {
   margin-right: 32px;
   padding: 96px 0 0;
   position: relative;
 }
 .spaghetti {
   background-color: rgba(255, 255, 255, 1);
   border-radius: 24px;
   padding: 215px 24px 24px;
   position: relative;
   backdrop-filter: blur(42px);
 }
 .spaghetti-details {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
 }
 .apple-3pc {
   width: 165px;
   font-family: "Poppins";
   font-size: 16px;
   font-weight: 600;
   line-height: 28px;
   color: rgba(7, 20, 59, 1);
   margin-bottom: 24px;
   letter-spacing: 0.32px;
 }
 .rate-2 {
   font-family: "Poppins";
   font-size: 16px;
   font-weight: 600;
   line-height: 28px;
   color: rgba(234, 106, 18, 1);
   letter-spacing: 0.32px;
 }
 .mask-group {
   width: 156px;
   height: 174.83px;
   position: absolute;
   right: 11px;
   top: 30.26px;
 }
 .spaghetti-two {
   width: 170px;
   height: 190.52px;
   position: absolute;
   right: 4px;
   top: 0;
 }
 .delete-icon {
   width: 30px;
   height: 24px;
   position: absolute;
   right: 12px;
   bottom: 30px;
 }
 </style>
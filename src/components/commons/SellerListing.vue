<template>
  <div class="container">
    <div class="image-container">
      <img class="image" 
      :src= sellerListing.image>
    </div>
    <p class="title"> {{ sellerListing.name }}</p>
    <p class="price"> ${{ sellerListing.price }}</p>
    <p class="description">Description : {{ sellerListing.description }}</p>
    <p class="qty">Qty : {{ sellerListing.qty === 0 ? 'SOLD OUT' : sellerListing.qty }}</p>
    <div class="last-row">
      <p class="seller-name"> {{sellerListing.Seller}} </p>
      <button @click = "deletefromListings(sellerListing)" class="add"> - </button>
    </div>
  </div>
</template>
  
<script>
import firebaseApp from '@/firebase.js'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { deleteDoc, getFirestore, collection, query, getDocs, doc, getDoc, setDoc, updateDoc, arrayUnion, addDoc } from "firebase/firestore"


const db = getFirestore(firebaseApp)
const SellerListings = collection(db, 'SellerListings');
  

   export default {
    name: 'ListingSELLERFINAL',
    props: {
      sellerListing: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        sellerListingRef : ""
      }
    },
    mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.user = user;
        const specificSeller = doc(SellerListings, this.user.uid);
        this.sellerListingRef = specificSeller
      }
    })
  },

    methods: {
        async deletefromListings(listingtoDelete) {
          if (this.sellerListingRef) {
  getDoc(this.sellerListingRef).then((doc) => {
    if (doc.exists()) {
      const list = doc.data().myArrayField;
      const updatedList = list.filter((listingID) => listingID !== listingtoDelete.id);
      updateDoc(this.sellerListingRef, { myArrayField: updatedList })

        .then(() => {
          console.log('Listing removed successfully');
        })
        .catch((error) => {
          console.error('Error removing element: ', error);
        });
    }
  });
}
const docRef = doc(db, "All Listings", listingtoDelete.id);

// Delete the document
deleteDoc(docRef)
  .then(() => {
    console.log('Document successfully deleted!');
  })
  .catch((error) => {
    console.error('Error removing document: ', error);
  });


  const buyersCartRef = collection(db, "BuyersCart");
    const querySnapshot = await getDocs(query(buyersCartRef));
    for (const docSnapshot of querySnapshot.docs) {
      const cartItem = docSnapshot.data();
      const updatedList = cartItem.myArrayField.filter((listingID) => listingID !== listingtoDelete.id);
      if (updatedList.length === cartItem.myArrayField.length) {
        continue; // The listing ID is not in the current cart item, no need to update
      }
      await updateDoc(doc(buyersCartRef, docSnapshot.id), { myArrayField: updatedList });
    }

            console.log("DELETE FROM LISTINGS")
            location.reload()
        }
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
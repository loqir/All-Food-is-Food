<template>
   <div class="menu-category-2">
  <div class="spaghetti">
    <div class="spaghetti-details">
      <p class="apple-3pc">{{sellerListing.name}}</p>
      <p class="rate-2">$ {{ sellerListing.price }}</p>
      <p> {{ sellerListing.description }}</p>
      <p> Qty : {{ sellerListing.qty }}</p>
    </div>
  </div>
  <!-- <img
    alt=""
    class="mask-group"
    src="https://static.overlay-tech.com/assets/d09bd426-c5f9-4fb1-8168-bc1fffd5c0b8.png"
  /> -->
  <img
    alt=""
    class="spaghetti-two"
    :src= sellerListing.image
    
  />
  <button @click = "deletefromListings(sellerListing)">
  <img
    alt=""
    class="delete-icon"
    src="https://static.overlay-tech.com/assets/f9d45d0e-74f6-430d-b29d-be9fe9a1cfa7.svg"
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
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { deleteDoc, getFirestore, collection, query, getDocs, doc, getDoc, updateDoc } from "firebase/firestore"

const db = getFirestore(firebaseApp)
const SellerListings = collection(db, 'SellerListings');

export default {
  name: 'Listing',
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
  width: 24px;
  height: 24px;
  position: absolute;
  right: 12px;
  bottom: 24px;
}
</style>
<template>
<div class="add-listing">
  <p class="add-a-listing">Add A Listing</p>
  <p class="name">Product</p>
  <input type = "text" v-model = "productEntry"  placeholder = "Enter product"><br>
  <p class="name">Price</p>
  <input type = "text" v-model = "priceEntry"  placeholder = "Enter listing price"><br>
  <p class="name">Description</p>
  <input type = "text" v-model = "descriptionEntry"  placeholder = "Enter description"><br>
  <p class="name">Quantity</p>
  <input type = "text" v-model = "quantityEntry"  placeholder = "Enter quantity"><br>
  <div class="upload-file">
    <input type = "file" ref ="myfile" class="uf">
  </div>
  <br>

  <button @click ="upload();addlisting()" class="upload"> Upload </button>
  <!--<button style = "border:none;" @click ="addlisting"> + </button> REMOVE THIS COW MAKE UPLOAD BUTTON ON TOP HANDLE ALL BACKEND OPERATIONS-->
</div>
</template>



<script>
import firebaseApp from '../firebase.js'
import {getFirestore} from "firebase/firestore"
import { storage } from "../firebase"
import { ref,uploadBytes } from "firebase/storage"
import { getDownloadURL } from "firebase/storage"
import { doc, getDoc, addDoc, collection, setDoc} from "firebase/firestore"
import { v4 as uuidv4 } from 'uuid';
import { getAuth, onAuthStateChanged } from "firebase/auth"

const db = getFirestore(firebaseApp)
const sellerListings = collection(db, "SellerListings");
const sellers = collection(db, "sellers")


export default {
    data() {
        productEntry : ""
        priceEntry : 0
        descriptionEntry: ""
        quantityEntry: 0
        image: ""
        sellerDocument : null
        sellerName : ""
    },
    mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.user = user;
        const specificSeller = doc(sellerListings, this.user.uid);
        this.sellerDocument = specificSeller
        const specificSellerInfo = doc(sellers, this.user.uid )
        const docSnapshot = await getDoc(specificSellerInfo)
        const data = docSnapshot.data()
        this.sellerName = data.CompanyName
        console.log(this.sellerName)
      }
    })
  },
    methods:{
      async upload() {
  const fileId = uuidv4();
  const fileName = `${fileId}_${this.$refs.myfile.files[0].name}`;
  const storageRef = ref(storage, `images/${fileName}`);
  try {
    await uploadBytes(storageRef, this.$refs.myfile.files[0]);
    console.log("uploaded");
    const downloadURL = await getDownloadURL(storageRef);
    this.image = downloadURL;
    console.log(this.image);
  } catch (error) {
    console.log(error);
  }
},
       async addlisting() {
        const newListingRef = doc(collection(db, "All Listings"));
  await setDoc(newListingRef, {
    id: newListingRef.id,
    name: this.productEntry,
    price: Number(this.priceEntry),
    description: this.descriptionEntry,
    qty : Number(this.quantityEntry),
    image: this.image,
    Seller : this.sellerName
  });
  const docSnap = await getDoc(this.sellerDocument);
if (docSnap.exists()) {
  const currList = docSnap.data().myArrayField || [];
  const newList = [...currList, newListingRef.id];
  await setDoc(this.sellerDocument, { myArrayField: newList });
} else {
  await setDoc(this.sellerDocument, { myArrayField: [newListingRef.id] });
}
  console.log("added listing with ID", newListingRef.id);
  location.reload()
      }
    }
  }
</script>



<style scoped>
.add-listing {
  background-color: rgb(247, 243, 243);
  border-radius: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(42px);
  height: auto;
}
.add-a-listing {
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 20px;
  letter-spacing: 0.8px;
}
.name {
  width: 165px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 20px;
  letter-spacing: 0.32px;
}
.upload-file {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 40%;
}
.upload {
  background-color: rgba(234, 106, 18, 1);
  border-radius: 24px;
  padding: 6px;
}
</style>
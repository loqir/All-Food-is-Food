<template>
    <div class="CartContainer">
   	   <div class="Header">
   	   	<h3 class="Heading">Shopping Cart</h3>
			  <button style = "border:none;" v-on:click = "removecart">
   	   	<h5 class="Action">Remove all</h5>
		</button>
   	   </div>

   	   <!-- <div class="Cart-Items">
   	   	  <div class="image-box">
   	   	  	<img class="img1" src="images/apple.png"/>
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title">Apple Juice</h1>
   	   	  	<h3 class="subtitle">250ml</h3>
   	   	  </div>
   	   	  <div class="counter">
   	   	  	<div class="btn">+</div>
   	   	  	<div class="count">2</div>
   	   	  	<div class="btn">-</div>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount">$2.99</div>
   	   	  	<div class="remove"><u>Remove</u></div>
   	   	  </div>
   	   </div> -->


   	   <div class="Cart-Items pad">
   	   	  <div class="image-box">
   	   	  	<img class="img1" 
			:src= item.image
			/>
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title">{{ item.name }}</h1>
   	   	  	<!-- <h3 class="subtitle">250ml</h3> -->
   	   	  </div>
   	   	  <div class="counter">
			<button style = "border:none;" v-on:click = "decrement(item)">
   	   	  	<div>-</div>
			</button>
   	   	  	<div class="count">{{quantity }} </div>
					<button style = "border:none;" v-on:click = "increment(item)">
   	   	  	<div>+</div>
			</button>
   	   	  </div>
   	   	  <div class="prices">
   	   	  	<div class="amount"> PRICE ${{ item.price}}</div>
			<button style = "border:none;" v-on:click = "deletefromcart(item)">
   	   	  	<div class="remove"><u>Remove</u></div>
		</button>
   	   	  </div>
   	   </div>
   	 <hr> 
   	 <div class="checkout">
   	 <div class="total">
   	 	<div>
   	 		<div class="Subtotal">Sub-Total</div>
   	 		<div class="items">{{cart.length}} items</div>
   	 	</div>
   	 	<div class="total-amount"> $ {{  totalValue }}</div>
   	 </div>
   	 <button class="button">Checkout</button></div>
   </div> 

</template>

<script>
import Logout from '@/components/Logout.vue'
import NavBar from '@/components/commons/NavBar.vue'
import SearchBar from '@/components/commons/SearchBar.vue'
import Listing from '@/components/Listing.vue'
import ListingBuyer from '@/components/ListingBuyer.vue'
import AddListing from '@/components/AddListing.vue'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { getFirestore, collection, query, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"
import { MIN_VALUE } from 'long'

const db = getFirestore(firebaseApp)
const BuyersCart = collection(db, 'BuyersCart');
const AllListings = collection(db, "All Listings")
export default {
  name: 'Cart',
  props: {
    item: {
      type: Object,
      required: true
    },
    quantity: {
      type: Number,
      required: true,
    },
	uniqueCart: {
      type: Array,
      required: true,
    },
	cart: {
      type: Array,
      required: true,
    },
  },
  
    data() {
      return {
      user : false,
      cartRef : "",
	  totalValue : 0
      }

    },
	mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.user = user;
        const specificbuyer = doc(BuyersCart, this.user.uid);
        this.cartRef = specificbuyer;
        let total = 0;
        for (let item of this.cart) {
          total += item.price;
        }
        this.totalValue = total;
		console.log(this.totalValue)
      }
    });
  },

    methods: {
      async deletefromcart(itemtoDelete) {
if (this.cartRef) {
  getDoc(this.cartRef).then((doc) => {
    if (doc.exists()) {
      const list = doc.data().myArrayField;
      const updatedList = list.filter((itemID) => itemID !== itemtoDelete.id);
      updateDoc(this.cartRef, { myArrayField: updatedList })

        .then(() => {
          console.log('Element removed successfully');
        })
        .catch((error) => {
          console.error('Error removing element: ', error);
        });
    }
  });
}

  console.log("DELETE FROM CART");

},
 async decrement(item)
 {
	const index = this.cart.indexOf(item);
	this.cart.splice(index, 1)
	this.totalValue -= item.price

 },
 async increment(item){
	this.cart.push(item)
	this.totalValue += item.price


 },
 removecart() {
	deleteDoc(this.cartRef)
 }

    },
// 	computed: {
//     async totalValue() {
//       let total = 0;
//       for (let listingID of this.cart) {
// 		const docRef = doc(collection(db, "All Listings"), listingID);
// 		const docSnap = await getDoc(docRef);
// 		const price = docSnap.data().price;
// 		console.log(price)
//         total += price
//       }
//       return total;
//     }
//   },
}
</script>

<style scoped>
.template {
 margin: 0;
 padding: 0;
 background: linear-gradient(to bottom right, #E3F0FF, #FAFCFF);
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
}
.CartContainer{
	width: 100vw;
	height: 100vh;
	background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px #1687d933;
}
.Header{
	margin: auto;
	width: 90%;
	height: 15%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.Heading{
	font-size: 20px;
	font-family: 'Open Sans';
	font-weight: 700;
	color: #2F3841;
}

.Action{
	font-size: 14px;
	font-family: 'Open Sans';
	font-weight: 600;
	color: #E44C4C;
	cursor: pointer;
	border-bottom: 1px solid #E44C4C;
}

.Cart-Items{
	margin: auto;
	width: 90%;
	height: 30%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.image-box{
	width: 15%;
	text-align: center;
}
.about{
	height: 100%;
	width: 24%;
}
.title{
	padding-top: 10px;
	line-height: 10px;
	font-size: 32px;
	font-family: 'Open Sans';
	font-weight: 800;
	color: #202020;
}
.subtitle{
	line-height: 10px;
	font-size: 18px;
	font-family: 'Open Sans';
	font-weight: 600;
	color: #909090;
  margin-top: 50px;
}

.counter{
	width: 15%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.btn{
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	font-family: 'Open Sans';
	font-weight: 900;
	color: #202020;
	cursor: pointer;
}
.count{
	font-size: 20px;
	font-family: 'Open Sans';
	font-weight: 600;
	color: #202020;
}

.prices{
	height: 100%;
	text-align: right;
}
.amount{
	padding-top: 20px;
	font-size: 26px;
	font-family: 'Open Sans';
	font-weight: 800;
	color: #202020;
}
.remove{
	padding-top: 5px;
	font-size: 14px;
	font-family: 'Open Sans';
	font-weight: 600;
	color: #E44C4C;
	cursor: pointer;
}

.pad{
	margin-top: 5px;
}

hr{
	width: 66%;
	float: right;
	margin-right: 5%;
}
.checkout{
	float: right;
	margin-right: 5%;
	width: 28%;
}
.total{
	width: 100%;
	display: flex;
	justify-content: space-between;
}
.Subtotal{
	font-size: 22px;
	font-family: 'Open Sans';
	font-weight: 700;
	color: #202020;
}
.items{
	font-size: 16px;
	font-family: 'Open Sans';
	font-weight: 500;
	color: #909090;
	line-height: 10px;
}
.total-amount{
	font-size: 36px;
	font-family: 'Open Sans';
	font-weight: 900;
	color: #202020;
}
.button{
	margin-top: 10px;
	width: 100%;
	height: 40px;
	border: none;
	background: linear-gradient(to bottom right, #B8D7FF, #8EB7EB);
	border-radius: 20px;
	cursor: pointer;
	font-size: 16px;
	font-family: 'Open Sans';
	font-weight: 600;
	color: #202020;
}
.img1{
  height: 120px;
}

</style>
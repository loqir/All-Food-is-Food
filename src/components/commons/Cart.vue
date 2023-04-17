<template>
    <div class="CartContainer">
   	   <div class="Cart-Items pad">
   	   	  <div class="image-box">
   	   	  	<img class="img1" :src= item.image
			/>
   	   	  </div>
   	   	  <div class="about">
   	   	  	<h1 class="title">{{ item.name }}</h1>
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
   	   	  	<div class="amount"> Price: ${{ item.price}}</div>
			<button style = "border:none;" v-on:click = "deletefromcart(item)">
   	   	  	<div class="remove"><u>Remove</u></div>
		</button>
   	   	  </div>
   	   </div>
			<!--<div class="checkout">
   	 <div class="total">
   	 	<div>
   	 		<div class="Subtotal">Sub-Total</div>
   	 		<div class="items">{{cart.length}} items</div>
   	 	</div>
   	 </div>
			</div>-->
   </div> 

</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth"
import firebaseApp from '@/firebase.js'
import { getFirestore, collection, query, getDocs, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"

const db = getFirestore(firebaseApp)
const BuyersCart = collection(db, 'BuyersCart');
const AllListings = collection(db, "All Listings")
export default {
  name: 'Cart',
  emits:["sendtotalvalue"],
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
	  asdvalue : 0
      }

    },
	async mounted() {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      this.user = user;
      const specificbuyer = doc(BuyersCart, this.user.uid);
      this.cartRef = specificbuyer;
      const totalValue = await this.calculateTotalValue();
      console.log(totalValue);
      this.$emit("sendtotalvalue", totalValue);
    }
  });
},
//   computed :{
// 	async totalValue() {
//     let value = 0;
//     const docSnap = await getDoc(this.cartRef)
//     const fkingcart = await docSnap.data().myArrayField
//     const promises = [];
//     for (let item of fkingcart) {
//       if (typeof item === 'string') {
//         const docRef = doc(db, "All Listings", item)
//         promises.push(getDoc(docRef)
//           .then((doc) => {
//             if (doc.exists()) {
//               const price = doc.data().price
//               console.log("string price " + price)
//               value += price
//             }
//           }));
//       }
//       else {
//         console.log("object price " + item.price)
//         value += item.price
//       }
//     }
//     await Promise.all(promises);
//     console.log("total valuefejifjei " + value)
//     return value;
//   }
	
//   },

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
		  this.$router.go(0)
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
	const abc = []
	for (let item of this.cart) {
		abc.push(item.id)
	}

	await updateDoc(this.cartRef, { myArrayField: abc})
	this.$emit("sendtotalvalue", this.totalValue)
	location.reload()

 },
 async increment(item) {
  const itemid = item.id;
  const qty = item.qty;
  const docSnap = await getDoc(this.cartRef);
  const currList = docSnap.data().myArrayField || [];
  const counts = currList.reduce((acc, itemid) => {
    acc[itemid] = (acc[itemid] || 0) + 1;
    return acc;
  }, {});
  if (counts[itemid] >= qty) {
    alert("Maximum quantity exceeded");
  } else {
    this.cart.push(item);
    const abc = [];
    for (let item of this.cart) {
      abc.push(item.id);
    }
    await updateDoc(this.cartRef, { myArrayField: abc });
    this.$emit("sendtotalvalue", this.totalValue);
    location.reload()
  }
},

 removecart() {
	deleteDoc(this.cartRef)
 },
 async calculateTotalValue() {
    let value = 0;
    const docSnap = await getDoc(this.cartRef);
    const fkingcart = await docSnap.data().myArrayField;
    const promises = [];
    for (let item of fkingcart) {
      if (typeof item === 'string') {
        const docRef = doc(db, "All Listings", item);
        promises.push(
          getDoc(docRef).then((doc) => {
            if (doc.exists()) {
              const price = doc.data().price;
              console.log("string price " + price);
              value += price;
            }
          })
        );
      } else {
        console.log("object price " + item.price);
        value += item.price;
      }
    }
    await Promise.all(promises);
    console.log("total valuefejifjei " + value);
    return value;
  },
  
  async totalValue() {
    return await this.calculateTotalValue();
  }
    },
}
</script>

<style scoped>
.CartContainer{
	width: 100%;
	background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 10px 20px #1687d933;
}
.Cart-Items{
	margin: auto;
	width: 90%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.image-box{
	width: 20%;
  height: 50%;
  align-self: center;
	margin-top: 10px;
}
.img1 {
	width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 100px;
}
.about{
	height: 100%;
	width: 24%;
	display: flex;
	align-items: center;
}
.title{
	padding-top: 10px;
	font-size: 24px;
	font-family: 'Open Sans';
	font-weight: 800;
	color: #202020;
}
.counter{
	width: 15%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.count{
	font-size: 20px;
	font-family: 'Open Sans';
	font-weight: 600;
	color: #202020;
}

.prices{
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.amount{
	font-family: 'Open Sans';
	font-size: 20px;
	font-weight: 600;
	color: #202020;
	text-align: center;
	margin-right: 7px;
}
.remove{
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
</style>
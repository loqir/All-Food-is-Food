<template>
<div class="my-cart">
  <img
    alt=""
    class="vector-2"
    src="https://static.overlay-tech.com/assets/8370d473-9cc0-443c-9ab4-1756752fe1a5.svg"
  />
  <p class="add-a-listing">Add A Listing</p>
  <p class="name">Product</p>
  <input type = "text" v-model = "productEntry"  placeholder = "Enter product"><br><br>
  <p class="name">Price</p>
  <input type = "text" v-model = "priceEntry"  placeholder = "Enter listing price"><br><br>
  <p class="name">Description</p>
  <input type = "text" v-model = "descriptionEntry"  placeholder = "Enter description"><br><br>
  <img
    alt=""
    class="image-11"
    src="https://static.overlay-tech.com/assets/e4257055-2a1b-4782-94e7-73d4d70f7404.png"
  />
  <button style = "border:none;" v-on:click = "addlisting"><img
    alt=""
    class="image-9"
    src="https://static.overlay-tech.com/assets/e9921e71-ec44-4406-8cd7-3aac4fa3cc95.png"
  />
</button>
</div>
</template>



<script>
export default {
    data() {
        productEntry : ""
        priceEntry : ""
        descriptionEntry: ""
    },
    methods: {
        addlisting() {
            // this.$emit("findfood", this.Entry)
            console.log("ADDLISTING")
        }
    }
}
</script>



<style scoped>
.my-cart {
  background-color: rgb(247, 243, 243);
  border-radius: 24px;
  padding: 24px 19px 97px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  backdrop-filter: blur(42px);
}
.vector-2 {
  width: 533px;
  margin-bottom: 43px;
}
.add-a-listing {
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 43px;
  letter-spacing: 0.8px;
}
.name {
  width: 165px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 43px;
  letter-spacing: 0.32px;
}
.icon-text {
  width: 177px;
  height: 12px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 43px;
  border-radius: 24px;
  padding: 8px 16px;
  border: 1px solid rgba(227, 225, 225, 1);
}
.image-11 {
  width: 234px;
  height: 40px;
  margin-bottom: 43px;
}
.image-9 {
  width: 57px;
  height: 47px;
}
</style>
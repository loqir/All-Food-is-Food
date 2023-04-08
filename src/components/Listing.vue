<template>
   <div class="menu-category-2">
  <div class="spaghetti">
    <div class="spaghetti-details">
      <p class="apple-3pc">Apple (3pc)</p>
      <p class="rate-2">$1.29</p>
    </div>
  </div>
  <img
    alt=""
    class="mask-group"
    src="https://static.overlay-tech.com/assets/d09bd426-c5f9-4fb1-8168-bc1fffd5c0b8.png"
  /><img
    alt=""
    class="spaghetti-two"
    src="https://static.overlay-tech.com/assets/d2cb78fb-0c45-4944-8be5-00d442d5a381.png"
  />
  <button @click = "del">
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

export default {
  name: 'Listing',
    data() {
    },

    methods: {
        del() {
            console.log("DELETE")
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
<template>
<div class="category">
  <div class="menu-category-2">
    <div class="spaghetti">
      <div class="spaghetti-details">
        <p class="apple-3pc">Apple (3pc)</p>
        <p class="rate-2">$1.29</p>
      </div>
    </div>
    <img
      alt=""
      class="spaghetti-two"
      src="https://static.overlay-tech.com/assets/d005746a-68bf-4e3b-8b03-b58fa003e73c.png"
    />
    <button class="delete-icon" style = "border:none;" v-on:click = "del">
    <img
      alt=""
      src="https://static.overlay-tech.com/assets/abc68e23-bf0f-44fd-9c04-ffbce123fafd.svg"
    />
</button>
  </div>
  <div class="menu-category-3-two">
    <div class="menu-category-3">
      <div class="spaghetti">
        <div class="spaghetti-details">
          <p class="apple-3pc">Kiwi (6pc)</p>
          <p class="rate-2">$2.49</p>
        </div>
      </div>
      <img
        alt=""
        class="vegetable-pizza"
        src="https://static.overlay-tech.com/assets/1f2b0dff-e936-4e89-bf94-d3592f5f7b36.png"
      />
    </div>
    <button class="delete-icon-two" style = "border:none;" v-on:click = "del">
    <img
      alt=""
      src="https://static.overlay-tech.com/assets/25ba83a4-71d0-4deb-ae11-977ee85bb698.svg"
    />
</button>
  </div>
  <div class="menu-category-4">
    <div class="sweets">
      <div class="sweets-details">
        <p class="apple-3pc">Strawberry (250g)</p>
        <p class="rate-2">$4.49</p>
      </div>
      <button class="delete-icon-three" style = "border:none;" v-on:click = "del">
      <img
        alt=""
        class="delete-icon-three"
        src="https://static.overlay-tech.com/assets/4d60ae2d-4371-4123-82dd-936f84ba38ee.svg"
      />
    </button>
    </div>
    <img
      alt=""
      class="sweets-two"
      src="https://static.overlay-tech.com/assets/2daf2212-27de-41f5-8ee0-1ea9b3f7a3c8.png"
    />
  </div>
</div>
</template>



<script>

export default {
    data() {
    },

    methods: {
        del() {
            console.log("DELETE")
        }
    }
}

</script>




<style scoped>.category {
    padding: 0 0 19px;
    display: flex;
    align-items: flex-start;
  }
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
  .menu-category-3-two {
    margin-right: 32px;
    position: relative;
  }
  .mask-group-two {
    width: 142px;
    height: 159.14px;
    position: absolute;
    left: 54.5px;
    top: 29.14px;
  }
  .menu-category-3 {
    padding: 96px 0 0;
    position: relative;
  }
  .mask-group-three {
    width: 142px;
    height: 159.14px;
    position: absolute;
    right: 16.5px;
    top: 57.16px;
  }
  .vegetable-pizza {
    width: 170px;
    height: 190.52px;
    position: absolute;
    right: 5.5px;
    top: 0;
  }
  .delete-icon-two {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 173px;
    bottom: 32px;
  }
  .menu-category-4 {
    padding: 102.56px 0 0;
    position: relative;
  }
  .sweets {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 24px;
    padding: 208.44px 24px 24px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    backdrop-filter: blur(42px);
  }
  .sweets-details {
    margin-right: 13px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .delete-icon-three {
    width: 24px;
    height: 24px;
  }
  .mask-group-four {
    width: 136px;
    height: 162.18px;
    position: absolute;
    left: 58.5px;
    top: 63.2px;
  }
  .sweets-two {
    width: 170px;
    height: 202.73px;
    position: absolute;
    left: 42px;
    top: 0;
  }
</style>
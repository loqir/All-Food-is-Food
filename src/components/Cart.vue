<template>
    <div class="cart-detail-1">
        <div class="cart-details">
          <div class="cart-title-1">
            <img
              alt=""
              class="mask-group"
              src="https://static.overlay-tech.com/assets/ac9f8fec-2ffd-4d8b-8152-36761f6f3de9.png"
            />
            <div class="frame-36416">
              <p class="apple-3pc">Apple (3pc)</p>
              <div class="frame-36394">
                <!-- <img
                  alt=""
                  class="frame-36368"
                  src="https://static.overlay-tech.com/assets/91f8c852-593f-48b3-8880-d1ca75ccabf9.svg"
                />
                <p class="num-1">1</p> -->
              </div>
            </div>
          </div>
          <div class="rate-1">
            <button style = "border:none;" v-on:click = "deletefromcart">
            <img
              alt=""
              class="delete-icon"
              src="https://static.overlay-tech.com/assets/67b0f50c-bc17-4092-b91d-6aeae54753e4.svg"
            />
        </button>
            <p class="num-1-29">
              <strong class="num-1-29-emphasis-0">$1.29</strong>
            </p>
          </div>
        </div>
        <img
          alt=""
          class="cart-image-1"
          src="https://static.overlay-tech.com/assets/c988fb27-1732-4e08-8b99-0fd0e51ec16a.png"
        />
      </div>
</template>

<script>
export default {
    data() {

    },
    methods: {
        deletefromcart() {
            // this.$emit("findfood", this.Entry)
            console.log("DELETE FROM CART")
        }
    }
}
</script>

<style>
.cart-detail-1 {
  margin-bottom: 24px;
  padding: 9px 0 10px 33px;
  position: relative;
}
.cart-details {
  background-color: rgba(255, 245, 238, 1);
  border-radius: 100px;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
}
.cart-title-1 {
  margin-right: 156px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mask-group {
  width: 64px;
  height: 65px;
  margin-right: 16px;
}
.frame-36416 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.apple-3pc {
  width: 158px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 8px;
  letter-spacing: 0.32px;
}
.frame-36394 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.frame-36368 {
  width: 10px;
  height: 10px;
  margin-right: 2px;
}
.num-1 {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
  letter-spacing: 0.32px;
}
.rate-1 {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.delete-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
}
.num-1-29 {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
}
.num-1-29-emphasis-0 {
  font-family: "Poppins";
  font-size: 13px;
  font-weight: 400;
  line-height: 23px;
  color: rgba(7, 20, 59, 1);
  letter-spacing: 0.26px;
}
.cart-image-1 {
  width: 116px;
  height: 116px;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
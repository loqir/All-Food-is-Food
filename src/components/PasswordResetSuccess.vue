<template>
  <div class="email-two">
    <img
      alt=""
      class="group-34514"
      src="https://static.overlay-tech.com/assets/8f15db54-3562-4da5-9dda-4ea586d1f181.svg"
    />
    <div class="email">
      <img
        alt=""
        class="group-33931"
        src="https://static.overlay-tech.com/assets/99b50856-8edd-4218-82a6-0c642dcff50a.png"
      />
      <div class="frame-34429">
        <div class="frame-1567">
          <img
            alt=""
            class="group-33604"
            src="https://static.overlay-tech.com/assets/f852d153-63b1-4c5f-b2cf-3dd0ae487b5f.svg"
          />
          <p class="success">Success !</p>
          <p class="a-email-has-been-send-to-your-email">
            A email has been send to your
            email&#64;domain.com. Please click on the
            included link to reset your password.
          </p>
        </div>
        <div class="sign-in-button">
          <router-link to="/login">Back to Sign in</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Email"
};
</script>

<style lang="scss" scoped>
.email-two {
  background-color: rgba(255, 255, 255, 1);
  padding: 180.65px 67.45px 574.66px 0;
  position: relative;
}
.group-34514 {
  width: 1855.6px;
  height: 324.69px;
  margin-left: -3.05px;
  position: relative;
}
.email {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 690px;
  top: 335px;
}
.group-33931 {
  width: 328px;
  height: 58px;
  margin-bottom: 24px;
}
.frame-34429 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.frame-1567 {
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.group-33604 {
  width: 86px;
  height: 91px;
  margin-bottom: 24px;
}
.success {
  color: rgba(7, 20, 59, 1);
  margin-bottom: 24px;
  letter-spacing: 0.8px;
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
}
.a-email-has-been-send-to-your-email {
  max-width: 540px;
  color: rgba(149, 152, 149, 1);
  text-align: center;
  letter-spacing: 0.32px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
}
.sign-in-button {
  background-color: rgba(234, 106, 18, 1);
  border-radius: 44px;
  padding: 8px 24px;
  box-shadow: 0 8px 16px 0 rgba(59, 138, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}
.text {
  width: 140px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  letter-spacing: 0.32px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
}
</style>
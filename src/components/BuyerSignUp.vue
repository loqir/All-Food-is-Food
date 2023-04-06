<template>
  <div class="buyer-sign-up">
    <img
      alt=""
      class="group-34514"
      src="https://static.overlay-tech.com/assets/6ab62ed5-d048-4601-b7a5-07a1d0d95aec.svg"
    />
    <div class="sign-up-three">
      <img
        alt=""
        class="group-33931"
        src="https://static.overlay-tech.com/assets/8f7cbc9c-52bb-4783-b139-39dee508ad4e.png"
      />
      <div class="frame-35384">
        <div class="frame-35383">
          <p class="sign-up">Sign Up</p>
          <p class="create-your-account">
            Create your account
          </p>
        </div>
        <div class="frame-35384">
          <div class="frame-35544">
            <div class="frame-35366">
              <div class="frame-35364">
                <p class="username-or-email-address">
                  First Name
                </p>
                <input class="email-input" type="text" placeholder="First Name">
              </div>
              <div class="frame-35364">
                <p class="username-or-email-address">
                  Last Name
                </p>
                <input class="email-input" placeholder="Last Name">
              </div>
            </div>
            <div class="frame-35366">
              <div class="frame-35364">
                <p class="username-or-email-address">
                  Email
                </p>
                <input class="email-input" type="email" placeholder="Email">
              </div>
              <div class="frame-35364">
                <p class="username-or-email-address">
                  Phone No.
                </p>
                <input class="email-input" placeholder="Phone No." type="tel" minlength="8">
              </div>
            </div>
            <div class="frame-35366">
              <div class="frame-35364">
                <p class="username-or-email-address">
                  Password
                </p>
                <input class="email-input" placeholder="Password" type="password">
              </div>
              <div class="frame-35364">
                <p class="username-or-email-address">
                  Confirm password
                </p>
                <input class="email-input" placeholder="Confirm Password" type="password">
              </div>
            </div>
          </div>
            <button class="sign-up-two">Log in</button>
          <div class="frame-35544">
            <p class="username-or-email-address-two">
              or sign up with Google
            </p>
            <div class="socail-links">
                <img
                  alt=""
                  class="union"
                  src="https://static.overlay-tech.com/assets/63a48114-e7f9-4446-93de-56ea1cd1922b.png"
                />
              </div>
            </div>
            <p class="already-have-an-account-sign-in">
              Already have an Account?
              <strong
                class="already-have-an-account-sign-in-emphasis-1">
                <router-link to="/login">Sign In</router-link></strong
              >
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "BuyerSignUp"
};
</script>

<style lang="scss" scoped>
.buyer-sign-up {
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
.sign-up-three {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 667px;
  top: 217px;
}
.group-33931 {
  width: 328px;
  height: 58px;
  margin-bottom: 24px;
}
.frame-35384 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.frame-35383 {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sign-up {
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 16px;
  letter-spacing: 0.8px;
}
.create-your-account {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(149, 152, 149, 1);
  letter-spacing: 0.32px;
}
.frame-35544 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
}
.frame-35366 {
  display: flex;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
}
.frame-35364 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-right: 16px;
  }
}
.username-or-email-address {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(149, 152, 149, 1);
  margin-bottom: 8px;
  letter-spacing: 0.32px;
}
.email-input {
  width: 216px;
  height: 15px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 24px;
  padding: 8px 16px;
  border: 1px solid rgba(234, 106, 18, 1);
}
.frame-35356 {
  background-color: rgba(234, 106, 18, 1);
  margin-bottom: 24px;
  border-radius: 44px;
  padding: 7px 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(234, 106, 18, 1);
}
.sign-up-two {
  background-color: rgba(234, 106, 18, 1);
  width: 140px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  letter-spacing: 0.32px;
  margin-bottom: 24px;
  border-radius: 44px;
  padding: 7px 23px;
}
.username-or-email-address-two {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 16px;
  letter-spacing: 0.32px;
}
.socail-links {
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
}
.facebook {
  width: 24px;
  height: 24px;
  box-shadow: 0 4px 8px 0 rgba(0, 16, 41, 0.1);
  &:not(:last-of-type) {
    margin-right: 24px;
  }
}
.gmail {
  background-color: rgba(255, 255, 255, 1);
  margin-right: 24px;
  border-radius: 64px;
  padding: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 16, 41, 0.1);
  display: flex;
  align-items: center;
  width: 16px;
  height: 16px;
}
.union {
  width: 16px;
  height: 16px;
}
.already-have-an-account-sign-in {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
}
.already-have-an-account-sign-in-emphasis-1 {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(234, 106, 18, 1);
  letter-spacing: 0.32px;
}
</style>
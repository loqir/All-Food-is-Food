<template>
  <div class="reset-password">
    <img
      alt=""
      class="group-34514"
      src="https://static.overlay-tech.com/assets/fbfa0457-7102-4b1e-928a-73e5497c696c.svg"
    />
    <div class="confirm">
      <img
        alt=""
        class="group-33931"
        src="https://static.overlay-tech.com/assets/947c0c71-a3d1-4151-8eae-d789b8a09cdd.png"
      />
      <div class="frame-35371">
        <div class="frame-35370">
          <div class="frame-35369">
            <p class="text">Reset Password</p>
            <p
              class="enter-your-email-address-and-well-send"
            >
              Enter your email address and we will send you an
              email with instructions to reset your password
            </p>
          </div>
          <div class="frame-35368">
            <p class="email">Email</p>
            <input class="email-input" type="email" placeholder="Email" v-model="email">
          </div>
        </div>
          <button @click="resetPassword" class="text-two">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
  name: "ResetPassword",

  data() {
    return {
      email: ""
    }
  },

  methods: {
    async resetPassword() {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, this.email)
      .then(() => {
        this.$router.push('/passwordresetsuccess')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode)

        if (errorCode == "auth/missing-email" || errorCode == "auth/invalid-email" || errorCode == "auth/user-not-found") {
          alert("Please Enter a Valid Email")
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.reset-password {
  background-color: rgba(255, 255, 255, 1);
  padding: 1px 67.45px 50px 0;
  position: relative;
}
.group-34514 {
  width: 100vw;
  height: 85vh;
  position: relative;
}
.confirm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 30vw;
  left: 35vw;
  top: 1vh;
}
.group-33931 {
  width: 328px;
  height: 58px;
  margin-bottom: 24px;
}
.frame-35371 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.frame-35370 {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.frame-35369 {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text {
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 16px;
  letter-spacing: 0.8px;
}
.enter-your-email-address-and-well-send {
  max-width: 466px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(149, 152, 149, 1);
  text-align: center;
  letter-spacing: 0.32px;
}
.frame-35368 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.email {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(149, 152, 149, 1);
  margin-bottom: 8px;
  letter-spacing: 0.32px;
}
.email-input {
  width: 30vw;
  height: 3vh;
  border-radius: 64px;
  padding: 8px 16px;
  border: 1px solid rgba(234, 106, 18, 1);
}
.sign-in-button {
  background-color: rgba(234, 106, 18, 1);
  border-radius: 64px;
  padding: 8px 24px;
  box-shadow: 0 8px 16px 0 rgba(59, 138, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-two {
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
</style>
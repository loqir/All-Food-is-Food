<template>
  <div class="login">
    <img
      alt=""
      class="group-34514"
      src="https://static.overlay-tech.com/assets/40279d73-fe01-482d-ad09-d71081b91186.svg"
    />
    <div class="sign-in-three">
      <p class="all-food-is-food">AllFoodIsFood</p>
      <div class="frame-35535">
        <div class="frame-35355">
          <p class="sign-in">Sign In</p>
          <div class="frame-35535">
            <div class="frame-35353">
              <div class="frame-35532">
                <p class="username-or-email-address">
                  Email
                </p>
                  <input type="email" placeholder="Enter Email" class="email-input" v-model="email">
              </div>
              <div class="frame-35532">
                <p class="username-or-email-address">
                  Password
                </p>
                <input type="password" placeholder="Enter Password" class="email-input" v-model="password">
              </div>
              <div class="frame-449">
                <div class="frame-448">
                  <div class="checkbox-2">
                    <input type="checkbox" class="tick">
                  </div>
                  <p class="password">Remember me?</p>
                </div>
                <router-link class="password-two" to="/passwordreset">Forget Password</router-link>
              </div>
            </div>
            <button @click="logIn" class="sign-in-two">Sign in</button>
          </div>
        </div>
        <div class="frame-35355">
          <p class="username-or-email-address-two">
            or sign in with Google
          </p>
          <div class="gmail">
            <img
              alt=""
              class="union"
              src="https://static.overlay-tech.com/assets/d278718b-251e-48fc-bcc6-33b33fa96320.png"
            />
          </div>
          <p class="dont-have-an-account-click-here-to-sig">
            Don't have an account?
            <strong
              class="dont-have-an-account-click-here-to-sig-emphasis-1">
              <router-link to="/buyersignup">Sign Up</router-link></strong
            >
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LogIn",

  data() {
      return {
        email: "",
        password: ""
      }
    },

    methods: {
        async logIn() {
            console.log("Logging in User");
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential) => {
              const user = userCredential.user;
              this.$router.push('/home')
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;

              console.log(errorMessage)

            });
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
  background-color: rgba(255, 255, 255, 1);
  padding: 1px 67.45px 50px 0;
  position: relative;
}
.group-34514 {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.sign-in-three {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 30vw;
  left: 35vw;
  top: 1vh;
}
.all-food-is-food {
  font-family: "Playfair Display";
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  color: rgba(34, 34, 34, 1);
  margin-bottom: 24px;
  letter-spacing: 0.48px;
}
.frame-35535 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.frame-35355 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
}
.sign-in {
  font-family: "Playfair Display";
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  color: rgba(7, 20, 59, 1);
  margin-bottom: 16px;
  letter-spacing: 0.8px;
}
.frame-35353 {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.frame-35532 {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  width: 21vw;
  height: 3vh;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 24px;
  padding: 8px 16px;
  border: 1px solid rgba(234, 106, 18, 1);
}
.frame-449 {
  width: 21vw;
  display: flex;
  align-items: flex-start;
}
.frame-448 {
  margin-right: 0vw;
  display: inline-flex;
  width: 13vw;
}
.checkbox-2 {
  background-color: rgba(255, 255, 255, 1);
  border-radius: 2px;
  display: flex;
  align-items: center;
  margin-right: 1vw;
}
.tick {
  width: 14px;
  height: 14px;
}
.password {
  font-family: "Poppins";
  text-align: start;
  width: 8vw;
  padding-top: 15px;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(149, 152, 149, 1);
  letter-spacing: 0.32px;
}
.password-two {
  font-family: "Poppins";
  width: 8vw;
  text-align: end;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(234, 106, 18, 1);
  letter-spacing: 0.32px;
  margin-top: 17px;
}
.frame-35356 {
  background-color: rgba(234, 106, 18, 1);
  border-radius: 24px;
  padding: 8px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sign-in-two {
  background-color: rgba(234, 106, 18, 1);
  padding: 8px 24px;
  border-radius: 24px;
  width: 140px;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  letter-spacing: 0.32px;
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
.gmail {
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 16px;
  border-radius: 64px;
  box-shadow: 0 4px 8px 0 rgba(0, 16, 41, 0.1);
  display: flex;
  align-items: flex-start;
}
.union {
  width: 16px;
  height: 16px;
}
.dont-have-an-account-click-here-to-sig {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(7, 20, 59, 1);
}
.dont-have-an-account-click-here-to-sig-emphasis-1 {
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  color: rgba(234, 106, 18, 1);
  letter-spacing: 0.32px;
}
</style>
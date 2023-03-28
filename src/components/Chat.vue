<template>
    <div class="chat-page">
      <div class="flex-wrapper-four">
        <div class="navigation-bar">
          <div class="icon-text">
            <div class="iconly-light-search">
              <img
                alt=""
                class="line-181"
                src="https://static.overlay-tech.com/assets/4a153333-f9f9-4fb5-a954-e5782f312cfa.svg"
              />
            </div>
            <p class="button">Search…</p>
          </div>
          <div class="user">
            <div class="frame-37291"></div>
            <div class="flex-wrapper-four">
              <p class="austin-robertson">Michelle Chong</p>
              <p class="marketing-administra">Buyer</p>
            </div>
          </div>
        </div>
        <p class="chat">Chat <br /></p>
        <div class="flex-wrapper-two">
          <div class="flex-wrapper-five">
            <img
              alt=""
              class="ellipse-218"
              src="https://static.overlay-tech.com/assets/297f2cb1-05fa-4285-bcc2-e66923083f1a.png"
            />
            <p class="hello-how-can-i-help">
              Hello, how can I help?
            </p>
          </div>
          <div class="flex-wrapper-six">
            <p class="how-is-the-state-of-the-apple">
              How is the state of the apple?
            </p>
            <img
              alt=""
              class="ellipse-219"
              src="https://static.overlay-tech.com/assets/78fdcff5-a976-4746-a558-a462ada5628b.png"
            />
          </div>
          <div class="flex-wrapper-seven">
            <img
              alt=""
              class="ellipse-218"
              src="https://static.overlay-tech.com/assets/75607ee0-1e4b-415a-919a-5170944dfe14.png"
            />
            <p class="they-are-fresh">They are fresh!</p>
          </div>
          <div class="flex-wrapper-eight">
            <p class="thanks">Thanks!<br /></p>
            <img
              alt=""
              class="ellipse-221"
              src="https://static.overlay-tech.com/assets/97961250-7382-430d-af52-f707f5b5a555.png"
            />
          </div>
          <div class="flex-wrapper-three">
            <p class="enter-text-here">Enter text here:</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar2 from "@/components/SideBar2.vue";
  
  export default {
    name: "ChatPage",
    components: { Sidebar2 }
  };
  </script>
  
  <style lang="scss" scoped>
  .chat-page {
    background-color: rgba(250, 250, 250, 1);
    padding: 0 0 80px;
    display: flex;
    align-items: flex-start;
  }
  .flex-wrapper-four {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .navigation-bar {
    background-color: rgba(255, 255, 255, 1);
    margin-bottom: 37px;
    padding: 16px 174px 16px 32px;
    box-shadow: 0 10px 30px 0 rgba(234, 106, 18, 0.05);
    display: flex;
    align-items: center;
  }
  .icon-text {
    background-color: rgba(255, 255, 255, 1);
    margin-right: 1098px;
    overflow: hidden;
    border-radius: 24px;
    padding: 7px 15px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(227, 225, 225, 1);
  }
  .iconly-light-search {
    margin-right: 8px;
    padding: 10.22px 1.17px 1.75px 10.75px;
    display: flex;
    align-items: flex-start;
    width: 2.08px;
    height: 2.03px;
  }
  .line-181 {
    height: 100%;
    flex: 1;
    object-fit: cover;
  }
  .button {
    width: 240px;
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: rgba(149, 152, 149, 1);
    letter-spacing: 0.32px;
  }
  .user {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .frame-37291 {
    width: 45px;
    height: 45px;
    background-size: 100% 100%;
    background-position: center;
    background-image: url("https://static.overlay-tech.com/assets/26ff32b9-f804-4a0d-a408-049c862c6954.png");
    margin-right: 16px;
    border-radius: 100px;
  }
  .austin-robertson {
    font-family: "Poppins";
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: rgba(7, 20, 59, 1);
    letter-spacing: 0.32px;
  }
  .marketing-administra {
    font-family: "Poppins";
    font-size: 13px;
    font-weight: 400;
    line-height: 23px;
    color: rgba(7, 20, 59, 1);
    letter-spacing: 0.26px;
  }
  .chat {
    height: 91px;
    width: 264px;
    font-family: "Poppins";
    font-size: 48px;
    font-weight: 400;
    line-height: 84px;
    color: rgba(0, 0, 0, 1);
    display: flex;
    margin-bottom: 3px;
    margin-left: 31px;
    letter-spacing: 0.96px;
  }
  .flex-wrapper-two {
    background-color: rgba(234, 106, 18, 0.32);
    margin-left: 236px;
    padding: 44px 35px 22px 17px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .flex-wrapper-five {
    margin-bottom: 75px;
    display: flex;
    align-items: flex-start;
  }
  .ellipse-218 {
    width: 109px;
    height: 108px;
    margin-right: 8px;
    border-radius: 50%;
  }
  .hello-how-can-i-help {
    height: 123px;
    width: 560px;
    font-family: "Poppins";
    font-size: 48px;
    font-weight: 400;
    line-height: 84px;
    color: rgba(0, 0, 0, 1);
    display: flex;
    margin-top: 12px;
    letter-spacing: 0.96px;
  }
  .flex-wrapper-six {
    margin-bottom: 111px;
    padding: 0 0 0 508px;
    display: flex;
    align-items: flex-start;
  }
  .how-is-the-state-of-the-apple {
    height: 183px;
    width: 576px;
    font-family: "Poppins";
    font-size: 48px;
    font-weight: 400;
    line-height: 84px;
    color: rgba(0, 0, 0, 1);
    display: flex;
    margin-right: 16px;
    letter-spacing: 0.96px;
  }
  .ellipse-219 {
    width: 109px;
    height: 108px;
    margin-top: 18px;
    border-radius: 50%;
  }
  .flex-wrapper-seven {
    margin-bottom: 60px;
    display: flex;
    align-items: flex-start;
  }
  .they-are-fresh {
    height: 123px;
    width: 560px;
    font-family: "Poppins";
    font-size: 48px;
    font-weight: 400;
    line-height: 84px;
    color: rgba(0, 0, 0, 1);
    display: flex;
    letter-spacing: 0.96px;
  }
  .flex-wrapper-eight {
    margin-bottom: 131px;
    padding: 0 0 0 867px;
    display: flex;
    align-items: flex-start;
  }
  .thanks {
    height: 92px;
    width: 233px;
    font-family: "Poppins";
    font-size: 48px;
    font-weight: 400;
    line-height: 84px;
    color: rgba(0, 0, 0, 1);
    display: flex;
    margin-top: 16px;
    letter-spacing: 0.96px;
  }
  .ellipse-221 {
    width: 109px;
    height: 108px;
    border-radius: 50%;
  }
  .flex-wrapper-three {
    background-color: rgba(255, 255, 255, 1);
    margin-left: 2px;
    padding: 0 54px 12px 64px;
    display: flex;
    align-items: flex-start;
  }
  .enter-text-here {
    height: 93px;
    width: 1089px;
    font-family: "Poppins";
    font-size: 48px;
    font-weight: 400;
    line-height: 84px;
    color: rgba(0, 0, 0, 1);
    display: flex;
    letter-spacing: 0.96px;
  }
  </style>
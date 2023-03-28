<template>
    <div class="sidebar-2">
      <div class="main-logo">
        <div class="logo">
          <div class="group-33932">
            <div class="flex-wrapper-one">
              <router-link to = "/">
                <p class="af2">AF2</p>
              </router-link>
            </div>
            <div class="pizza-icon"></div>
          </div>
        </div>
      </div>
      <div class="frame-36360">
        <div class="iconly-bulk-category">
          <img
            alt=""
            class="category"
            src="https://static.overlay-tech.com/assets/435193db-0bc2-4b37-8dde-3466c9fae870.svg"
          />
        </div>
        <div class="frame-37291">
          <img
            alt=""
            class="person02-male-1-1"
            src="https://static.overlay-tech.com/assets/f4ee22c8-77b0-4327-9fa0-05a04b24de36.png"
          />
        </div>
        <div class="iconly-bulk-buy">
          <img
            alt=""
            class="buy"
            src="https://static.overlay-tech.com/assets/abbadcb0-e02c-4508-97b8-442273b078d3.svg"
          />
        </div>
        <div class="iconly-bulk-3-user">
          <router-link to = "/Chat">
          <img
            alt=""
            class="num-3-user"
            src="https://static.overlay-tech.com/assets/5de7b562-ae8e-4238-96fd-3bf8386b3609.svg"
          />
        </router-link>
        </div>
        <img
          alt=""
          class="image-10"
          src="https://static.overlay-tech.com/assets/6dc6be08-cab8-4770-b61a-b037ca698322.png"
        />
      </div>
      <div class="frame-38149"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Sidebar2"
  };
  
  </script>
  
  <style lang="scss" scoped>
  .sidebar-2 {
    background-color: rgba(255, 255, 255, 1);
    padding: 74px 14px 0 10px;
    box-shadow: 0 10px 30px 0 rgba(234, 106, 18, 0.05);
    position: relative;
  }
  .main-logo {
    position: absolute;
    left: 3px;
    top: 0;
  }
  .logo {
    padding: 1px 3px 0.99px;
    position: absolute;
    left: -2.5px;
    top: 0.5px;
  }
  .group-33932 {
    padding: 8.01px 0 0;
    position: relative;
  }
  .flex-wrapper-one {
    background: linear-gradient(
        rgba(234, 106, 18, 0.32),
        rgba(234, 106, 18, 0.32)
      ),
      rgba(255, 255, 255, 1);
    border-radius: 50%;
    padding: 0 14.5px 9px 13.5px;
    position: relative;
  }
  .af2 {
    color: rgba(34, 34, 34, 1);
    letter-spacing: 0.48px;

  }
  .pizza-icon {
    width: 22px;
    height: 22px;
    border-radius: 48px;
    position: absolute;
    left: 34.5px;
    top: 0;
  }
  .frame-36360 {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .iconly-bulk-category {
    background-color: rgba(196, 196, 196, 1);
    margin-bottom: 24px;
    border-radius: 100px;
    padding: 16px;
    display: flex;
    align-items: flex-start;
  }
  .category {
    width: 20px;
    height: 20px;
  }
  .frame-37291 {
    background-color: rgba(255, 243, 235, 1);
    margin-bottom: 24px;
    border-radius: 100px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    height: 40px;
    width: 40px;
    position: relative;
  }
  .person02-male-1-1 {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0.5px;
    top: -1px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    border-radius: 100px;
  }
  .iconly-bulk-buy {
    background-color: rgba(255, 255, 255, 1);
    margin-bottom: 24px;
    padding: 4.17px 3.31px 3.17px 3.33px;
    display: flex;
    align-items: center;
    height: 32.66px;
    width: 33.36px;
  }
  .buy {
    width: 33.36px;
    height: 32.66px;
  }
  .iconly-bulk-3-user {
    background-color: rgba(234, 106, 18, 1);
    margin-bottom: 24px;
    border-radius: 100px;
    padding: 12px 9px;
    display: flex;
    align-items: center;
    height: 16px;
    width: 22px;
  }
  .num-3-user {
    width: 22px;
    height: 16px;
  }
  .image-10 {
    width: 61px;
    height: 50px;
  }
  .frame-38149 {
    width: 17px;
    height: 6px;
    position: absolute;
    left: 9px;
    bottom: -6px;
  }
  </style>
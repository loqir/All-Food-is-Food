<template>
  <div class="navigation-bar">
          <div class="icon-text">
            <div class="iconly-light-search">
              <img
                alt=""
                class="vector"
                src="https://static.overlay-tech.com/assets/55aa4959-8ce7-48c7-8d1e-e843d9c46e20.svg"
              />
            </div>
            <input type="text" placeholder="Search" class="icon-text" id="search-bar">
          </div>
        </div>
</template>

<script>
export default {
  name: "SearchBar2"
};
</script>

<style lang="scss" scoped>
#search-bar {
  border: none;
}
#search-bar:focus {
  outline: none;
}
.navigation-bar {
  background-color: rgba(255, 255, 255, 1);
  padding: 16px 70vw 16px 32px;
  box-shadow: 0 10px 30px 0 rgba(234, 106, 18, 0.05);
  position: relative;
  display: inline;
  width: 80vw;
}
.icon-text {
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  border-radius: 24px;
  padding: 7px 15px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(227, 225, 225, 1);
  height: 4vh;
  width: 20vw;
}
.iconly-light-search {
  margin-right: 8px;
  padding: 1.17px 1.17px 1.75px 1.75px;
  display: flex;
  align-items: center;
  width: 11.08px;
  height: 11.08px;
}
.vector {
  flex: 1;
  align-self: stretch;
  object-fit: cover;
}</style>
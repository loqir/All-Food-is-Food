<template>
  <div class="navigation-bar">
          <div class="icon-text">
            <div class="iconly-light-search">
              <button @click ="search" class="search">
                <img src="https://static.overlay-tech.com/assets/55aa4959-8ce7-48c7-8d1e-e843d9c46e20.svg">
              </button>
            </div>
            <input type="text" placeholder="Search" v-model = "searchEntry" class="input" id="search-bar">
          </div>
        </div>
</template>

<script>
export default {
  name: "SearchBar2",
  data() {
      return {
        searchEntry: ""
      }
    },

    emits:["findfood"],
    methods: {
        search() {
            this.$emit("findfood", this.searchEntry)
            console.log(this.searchEntry)
        }
    }
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
  box-shadow: 0 10px 30px 0 rgba(234, 106, 18, 0.05);
  position: relative;
  display: flex;
  width: 80vw;
  height: 8vh;
  align-items: center;
}
.icon-text {
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  border-radius: 24px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid rgba(227, 225, 225, 1);
  width: 20vw;
  height: 4vh;
  padding-left: 5px;
}
.iconly-light-search {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 20%;
}

.input {
  display: flex;
  justify-content: flex-start;
  width: 20vw;
}
.search {
  border: 0;
  height: 100%;
  border-radius: 0 24px 24px 0;
  padding: 0;
  width: 100%; 
}
</style>
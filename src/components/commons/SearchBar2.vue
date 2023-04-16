<template>
  <div class="navigation-bar">
          <div class="icon-text">
            <div class="iconly-light-search">
              <button @click ="search">
              <img
                alt=""
                class="vector"
                src="https://static.overlay-tech.com/assets/55aa4959-8ce7-48c7-8d1e-e843d9c46e20.svg"
              />
            </button>
            </div>
            <input type="text" placeholder="Find your food" v-model = "searchEntry" class="icon-text" id="search-bar">
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
  justify-content: flex-start;
  align-items: center;
  border: 1px solid rgba(227, 225, 225, 1);
  width: 20vw;
  height: 4vh;
  padding-left: 5px;
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
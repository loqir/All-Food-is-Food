<template>
    <label for = "searchedfood"> Find your Food </label>
    <input type = "text" v-model = "searchEntry"  placeholder = "What would you like to find?"><br><br>
    <button type="submit" @click ="search">Search</button><br><br>
    <AddListing/>
</template>



<script>
export default {
    data() {
        searchEntry: ""
    },
    emits:["findfood"],
    methods: {
        search() {
            this.$emit("findfood", this.searchEntry)
            console.log(this.searchEntry)
        }
    }
}
</script>



<style scoped>

</style>
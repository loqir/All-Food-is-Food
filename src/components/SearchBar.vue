<template>
    <label for = "searchedfood"> Find your Food </label>
    <input type = "text" v-model = "Entry"  placeholder = "What would you like to find?"><br><br>
</template>



<script>
export default {
    data() {
        Entry: ""
    },
    // emits:["findfood"],
    methods: {
        search() {
            // this.$emit("findfood", this.Entry)
            console.log(this.Entry)
        }
    }
}
</script>



<style scoped>

</style>
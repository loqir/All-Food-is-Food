<template>
  <div class="container">
    <div class="image-container">
      <img class="image" src="../../assets/knowledge_graph_logo.png">
    </div>
    <p class="title"> Apple (3pc) </p>
    <p class="price"> $1.29 </p>
    <p class="description">some dummy description</p>
    <p class="qty">Quantity: 20</p>
    <p class="seller-name"> fairprice</p>
    <button class="add"> + </button>
  </div>
</template>

<script>
export default {
  name: "Listing"
}
</script>

<style scoped>
  p {
    margin: 5px;
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 30%;
    border-radius: 24px;
  }
  .container:hover {
    display: flex;
    flex-direction: column;
    color: white;
    background-color: rgba(234, 106, 18, 1);
  }
  .image-container {
    width: 50%;
    height: 50%;
    align-self: center;
    margin-top: 10px;
  }
  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
  }
  .add {
    width: 25px;
    text-align: center;
    align-self: end;
    border-radius: 20px;
    color: white;
    background-color: coral;
    margin-bottom: 10px;
    margin-right: 10px;
  }

</style>
<template>
  <button :class="className">{{ children }}</button>
</template>

<script>
export default {
  name: 'FrameButton',
  props: {
    children: String,
    className: String
  }
}
</script>

<style>

button {
  align-items: center;
  background-color: #EA6A12;
  color: white;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  padding: 8px 24px;
  position: relative;
  width: fit-content;
}
</style>


<template>
  <div class="scroll-parent">
    <div class="scroll-element primary">
      <img src="~assets/img/carousel/africana.png" alt="">
      <img src="~assets/img/carousel/lion.png" alt="">
      <img src="~assets/img/carousel/snake.png" alt="">
      <img src="~assets/img/carousel/monkey.png" alt="">
      <img src="~assets/img/carousel/giraffe.png" alt="">
      <img src="~assets/img/carousel/rhino.png" alt="">
      <img src="~assets/img/carousel/panther.png" alt="">
      <img src="~assets/img/carousel/elephant.png" alt="">
      <img src="~assets/img/carousel/camel.png" alt="">
      <img src="~assets/img/carousel/cow.png" alt="">
    </div>
    <div class="scroll-element secondary">
      <img src="~assets/img/carousel/africana.png" alt="">
      <img src="~assets/img/carousel/lion.png" alt="">
      <img src="~assets/img/carousel/snake.png" alt="">
      <img src="~assets/img/carousel/monkey.png" alt="">
      <img src="~assets/img/carousel/giraffe.png" alt="">
      <img src="~assets/img/carousel/rhino.png" alt="">
      <img src="~assets/img/carousel/panther.png" alt="">
      <img src="~assets/img/carousel/elephant.png" alt="">
      <img src="~assets/img/carousel/camel.png" alt="">
      <img src="~assets/img/carousel/cow.png" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

.scroll-parent {
  position: relative;
  width: 100vw;
  height: 6.5rem;
  overflow-x: hidden;
}

.scroll-element {
  width: inherit;
  height: inherit;
  position: absolute;
  display: flex;
  gap: 2rem;
  left: 0%;
  top: 0%;
  margin: 1rem;
  max-width: 5rem;
  max-height: 5rem;
  animation: primary 13s linear infinite;
}
.primary {
  animation: primary 13s linear infinite;
}

.secondary {
  animation: secondary 13s linear infinite;
}

@keyframes primary {
  from {
    left: -100%;
  }
  to {
    left: 0%;
  }
}

@keyframes secondary {
  from {
    left: 0%;
  }
  to {
    left: 100%;
  }
}
</style>

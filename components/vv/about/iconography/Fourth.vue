
<template>
  <div class="scroll-parent">
    <div class="scroll-element primary">
      <img src="~assets/svg/vv/shopping-cart.svg" alt="image-placeholder-1">
      <img src="~assets/svg/vv/water.svg" alt="image-placeholder-2">
      <img src="~assets/svg/vv/medicine.svg" alt="image-placeholder-3">
      <img src="~assets/svg/vv/studying.svg" alt="image-placeholder-4">
      <img src="~assets/svg/vv/night-color.svg" alt="image-placeholder-5">
      <img src="~assets/svg/vv/ear-color.svg" alt="image-placeholder-6">
      <img src="~assets/svg/vv/total.svg" alt="image-placeholder-1">
      <img src="~assets/svg/vv/timer-color.svg" alt="image-placeholder-2">
      <img src="~assets/svg/vv/bar.svg" alt="image-placeholder-3">
      <img src="~assets/svg/vv/conversation-color.svg" alt="image-placeholder-4">
    </div>
    <div class="scroll-element secondary">
      <img src="~assets/svg/vv/shopping-cart.svg" alt="image-placeholder-1">
      <img src="~assets/svg/vv/water.svg" alt="image-placeholder-2">
      <img src="~assets/svg/vv/medicine.svg" alt="image-placeholder-3">
      <img src="~assets/svg/vv/studying.svg" alt="image-placeholder-4">
      <img src="~assets/svg/vv/night-color.svg" alt="image-placeholder-5">
      <img src="~assets/svg/vv/ear-color.svg" alt="image-placeholder-6">
      <img src="~assets/svg/vv/total.svg" alt="image-placeholder-1">
      <img src="~assets/svg/vv/timer-color.svg" alt="image-placeholder-2">
      <img src="~assets/svg/vv/bar.svg" alt="image-placeholder-3">
      <img src="~assets/svg/vv/conversation-color.svg" alt="image-placeholder-4">
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
  min-width: 1100px;
  @media screen and (max-width: 768px) {
    height: 5.2rem;
    min-width: 900px;
  }
  @media screen and (max-width: 480px) {
    height: 4rem;
    min-width: 650px;
  }
  overflow-x: hidden;
}

.scroll-element {
  width: inherit;
  height: inherit;
  position: absolute;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  left: 0%;
  top: 0%;
  margin-top: 1rem;
  min-width: 100%;
  max-height: 5rem;
  @media screen and (max-width: 768px) {
    margin-top: 0.8rem;
    max-height: 4rem;
    gap: 0.7rem;
  }
  @media screen and (max-width: 480px) {
    margin-top: 0.5rem;
    gap: 0.7rem;
    max-height: 3rem;
  }

  overflow: hidden;
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

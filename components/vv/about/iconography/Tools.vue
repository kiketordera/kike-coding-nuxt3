
<template>
  <div class="scroll-parent">
    <div class="scroll-element primary">
      <img src="~assets/svg/vv/categories-color.svg" alt="image-placeholder-1">
      <img src="~assets/svg/vv/cut-color.svg" alt="image-placeholder-2">
      <img src="~assets/svg/vv/tent.svg" alt="image-placeholder-3">
      <img src="~assets/svg/vv/wallet-solo.svg" alt="image-placeholder-4">
      <img src="~assets/svg/vv/products-hover.svg" alt="image-placeholder-5">
      <img src="~assets/svg/vv/privacy.svg" alt="image-placeholder-6">
      <img src="~assets/svg/vv/search-color.svg" alt="image-placeholder-1">
      <img src="~assets/svg/vv/star-thin.svg" alt="image-placeholder-2">
      <img src="~assets/svg/vv/info.svg" alt="image-placeholder-3">
      <img src="~assets/svg/vv/demo-color.svg" alt="image-placeholder-4">
    </div>
    <div class="scroll-element secondary">
      <img src="~assets/svg/vv/categories-color.svg" alt="image-placeholder-1">
      <img src="~assets/svg/vv/cut-color.svg" alt="image-placeholder-2">
      <img src="~assets/svg/vv/tent.svg" alt="image-placeholder-3">
      <img src="~assets/svg/vv/wallet-solo.svg" alt="image-placeholder-4">
      <img src="~assets/svg/vv/products-hover.svg" alt="image-placeholder-5">
      <img src="~assets/svg/vv/privacy.svg" alt="image-placeholder-6">
      <img src="~assets/svg/vv/search-color.svg" alt="image-placeholder-1">
      <img src="~assets/svg/vv/star-thin.svg" alt="image-placeholder-2">
      <img src="~assets/svg/vv/info.svg" alt="image-placeholder-3">
      <img src="~assets/svg/vv/demo-color.svg" alt="image-placeholder-4">
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
    gap: 0.8rem;
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
    left: 0%;
  }
  to {
    left: -100%;
  }
}

@keyframes secondary {
  from {
    left: 100%;
  }
  to {
    left: 0%;
  }
}
</style>

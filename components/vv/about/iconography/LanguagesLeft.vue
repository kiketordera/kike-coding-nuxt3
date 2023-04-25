
<template>
  <div class="scroll-parent">
    <div class="scroll-element primary">
      <img src="~assets/svg/vv/turkana-spanish.svg" alt="">
      <span>Turkana</span>
      <img src="~assets/svg/vv/german-spanish.svg" alt="">
      <p>Germany</p>
      <img src="~assets/svg/vv/spanish-english.svg" alt="">
      <p>spanish</p>
      <img src="~assets/svg/vv/german-swahili.svg" alt="">
      <p>Swahili-Turkana</p>
      <img src="~assets/svg/vv/french-german.svg" alt="">
      <p>French</p>
      <img src="~assets/svg/vv/swahili-turkana.svg" alt="">
      <p>Swahili</p>
      <img src="~assets/svg/vv/french-german.svg" alt="">
      <p>English</p>
      <img src="~assets/svg/vv/german-spanish.svg" alt="">
      <p>Germany</p>
      <img src="~assets/svg/vv/german-swahili.svg" alt="">
      <p>Spanish</p>
      <img src="~assets/svg/vv/french-turkana.svg" alt="">
      <p>French</p>
    </div>
    <div class="scroll-element secondary">
      <img src="~assets/svg/vv/turkana-spanish.svg" alt="">
      <span>Turkana</span>
      <img src="~assets/svg/vv/german-spanish.svg" alt="">
      <p>Germany</p>
      <img src="~assets/svg/vv/spanish-english.svg" alt="">
      <p>spanish</p>
      <img src="~assets/svg/vv/german-swahili.svg" alt="">
      <p>Swahili-Turkana</p>
      <img src="~assets/svg/vv/french-german.svg" alt="">
      <p>French</p>
      <img src="~assets/svg/vv/swahili-turkana.svg" alt="">
      <p>Swahili</p>
      <img src="~assets/svg/vv/french-german.svg" alt="">
      <p>English</p>
      <img src="~assets/svg/vv/german-spanish.svg" alt="">
      <p>Germany</p>
      <img src="~assets/svg/vv/german-swahili.svg" alt="">
      <p>Spanish</p>
      <img src="~assets/svg/vv/english-french.svg" alt="">
      <p>French</p>
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
  align-items: center;
  gap: 0.5rem;
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

<template>
  <infinite-slide-bar :duration="'40s'" :direction="props.reverse ? 'reverse' : 'normal'">
    <div class="scroll">
      <img src="/img/vv/lang/swahili-turkana.svg" alt="">
      <p class="language-text">
        <span>Turkana</span>
      </p>
      <img src="/img/vv/lang/turkana-spanish.svg" alt="">
      <p class="language-spanish">
        <span>Spanish</span>
      </p>
      <img src="/img/vv/lang/spanish-english.svg" alt="">
      <p class="language-english">
        <span>English</span>
      </p>
      <img src="/img/vv/lang/english-french.svg" alt="">
      <p class="language-french">
        <span>French</span>
      </p>
      <img src="/img/vv/lang/french-german.svg" alt="">
      <p class="language-german">
        <span>German</span>
      </p>
      <img src="/img/vv/lang/german-swahili.svg" alt="">
      <p class="swahili">
        <span>Swahili</span>
      </p>
    </div>
  </infinite-slide-bar>
</template>

<script lang="ts" setup>
import InfiniteSlideBar from 'vue3-infinite-slide-bar'

const props = defineProps({
  reverse: {
    type: Boolean,
    default: false,
  },
})

</script>

<style lang="scss" scoped>

.scroll {
  @apply flex w-full justify-around;
}

p {
  font-size: 1.2rem;
  &.language-text {
    color: #A97C50;
  }
  &.swahili, .language-swahili {
    color: #ED037C;
  }
  &.language-german {
    color: #CF1F26;
  }
  &.language-french {
    color: #FF8F00;
  }
  &.language-english {
    color: #00A3D2;
  }
  &.language-spanish {
    color: #63B190;
  }
  &.language-span {
    color: #CF1F26;
  }
}

</style>

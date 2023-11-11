<template>
  <infinite-slide-bar :duration="'40s'">
    <div class="slider">
      <img
        v-for="(image, index) in skills"
        :key="index"
        :src="image"
        alt="Sliding Image"
      >
    </div>
  </infinite-slide-bar>
</template>

<script setup lang="ts">
import InfiniteSlideBar from 'vue3-infinite-slide-bar'

const skills = [
'/svg/kk/skills/html5.svg',
'/svg/kk/skills/css3.svg',
'/svg/kk/skills/dart.svg',
'/svg/kk/skills/docker.svg',
'/svg/kk/skills/firebase.svg',
'/svg/kk/skills/flutter.svg',
'/svg/kk/skills/golang.svg',
'/svg/kk/skills/java.svg',
'/svg/kk/skills/js.svg',
'/svg/kk/skills/node.svg',
'/svg/kk/skills/nuxt.svg',
'/svg/kk/skills/swift.svg',
'/svg/kk/skills/tailwind.svg',
'/svg/kk/skills/ts.svg',
'/svg/kk/skills/ux.svg',
'/svg/kk/skills/figma.svg',
'/svg/kk/skills/ui.svg',
'/svg/kk/skills/vue.svg',
]
</script>

<style lang="scss" scoped>
.slider {
    @apply flex w-full justify-around pt-4;
    img {
      object-fit: contain;
      max-width: 140px;
      margin-right: 3rem;
    }
}
</style>

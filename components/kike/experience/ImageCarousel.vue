<template>
  <ClientOnly>
    <swiper-container
      :slides-per-view="3"
      :effect="'coverflow'"
      :centered-slides="true"
      navigation="true"
      :centered-slides-bounds="true"
    >
      <swiper-slide v-for="img in props.imgs" :key="img" class="swipper">
        <img :src="img" class="elevation-8 mx-auto">
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { register } from 'swiper/element/bundle'

register()

const props = defineProps({
  imgs: {
    type: Array<string>,
    required: true,
  },
})
</script>

<style lang="scss">
:root {
    --swiper-theme-color: #595959; // This is for general theme color
    --swiper-navigation-color: #595959; // This is specifically for navigation arrows
}

.swipper {
  img {
    @apply max-h-[50vh];
  }
}
</style>

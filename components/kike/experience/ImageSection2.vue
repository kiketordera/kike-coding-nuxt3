<template>
  <ClientOnly>
    <swiper-container
      :slides-per-view="3"
      :space-between="spaceBetween"
      :centered-slides="true"
      :pagination="{
        type: 'fraction',
      }"
      navigation="true"
      :breakpoints="{
        768: {
          slidesPerView: 3,
        },
      }"
      @progress="onProgress"
      @slidechange="onSlideChange"
    >
      <swiper-slide v-for="img in props.links" :key="img">
        <img :src="img">
      </swiper-slide>
    <!-- <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide> -->
    </swiper-container>
  <!-- <div class="images">
    <img
      v-for="img in props.links"
      :key="img"
      :src="img"
      alt=""
    >
  </div> -->
  </ClientOnly>
</template>

<script lang="ts" setup>
import { register } from 'swiper/element/bundle'

register()

const spaceBetween = 10
      const onProgress = (e) => {
        const [swiper, progress] = e.detail
        console.log(progress)
      }
      const onSlideChange = (e) => {
        console.log('slide changed')
      }
const props = defineProps({
  links: {
    type: Array<string>,
    required: true,
  },
})

</script>

<style lang="scss" scoped>

.images {
    @apply grid lg:grid-cols-4 grid-cols-1 items-center gap-10 py-16;
    img {
        @apply w-full bg-cover;
    }
}

</style>

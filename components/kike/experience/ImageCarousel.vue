<template>
  <ClientOnly>
    <swiper-container
      :slides-per-view="slidesPerView"
      :effect="effect"
      :centered-slides="true"
      navigation="true"
      :centered-slides-bounds="true"
    >
      <swiper-slide v-for="img in props.imgs" :key="img" class="swipper">
        <img :src="img" class="elevation-8 mx-auto rounded-[1rem]">
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { register } from 'swiper/element/bundle'

const effect = ref('coverflow') // default effect
const slidesPerView = ref(3) // default value

const updateEffect = () => {
  if (window.innerWidth <= 650) {
    effect.value = 'cards'
    slidesPerView.value = 1 // show only one slide at a time
  } else {
    effect.value = 'coverflow'
    slidesPerView.value = 3 // show three slides at a time
  }
}

onMounted(() => {
  window.addEventListener('resize', updateEffect)
  updateEffect() // call once initially to set the correct effect on page load
})

onUnmounted(() => {
  window.removeEventListener('resize', updateEffect)
})

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

.swiper-container {
  display: flex;
  justify-content: center;
}

.swipper {
  @apply mx-auto;
  img {
    @apply max-h-[600px];
  }
}
</style>

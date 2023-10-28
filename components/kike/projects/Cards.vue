<template>
  <ClientOnly>
    <swiper-container
      :slides-per-view="slidesPerView"
      :effect="effect"
      :centered-slides="true"
      :autoplay="{ delay: 5000 }"
      :navigation="true"
      :pagination="{
        type: 'fraction',
      }"
      @slidechange="onSlideChange"
    >
      <swiper-slide v-for="(project, index) in projects" :key="project.id" class="swipper" lazy="true">
        <NuxtLink :href="`/projects/${project.link}`">
          <v-card class="elevation-2 card">
            <v-img :aspect-ratio="16/9" cover :src="project.mainImg" loading="lazy">
              <div class="bg">
                <v-expand-transition>
                  <div
                    v-if="activeSlide === index"
                    class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 flex items-center text-center"
                    :style="`background-color: ${project.color_bg_logo}`"
                    style="height: 100%; opacity: 0.85; backdrop-filter: blur(10px);"
                  >
                    <img
                      :src="project.logo"
                      :alt="`${project.link} logo`"
                      class="mx-auto max-h-[170px] w-2/3 max-w-[170px] object-contain sm:max-h-[300px] sm:max-w-[300px]"
                      loading="lazy"
                    >
                  </div>
                </v-expand-transition>
              </div>
            </v-img>
          </v-card>
        </NuxtLink>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
  <div class="mt-12 text-center">
    <NuxtLink data-aos="fade-down" :to="currentProject" class="button">
      Dive in
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { register } from 'swiper/element/bundle'
import { ref, onMounted, onUnmounted } from 'vue'
import projects from '../../../assets/data/projects.json'

register()

const effect = ref('coverflow') // default effect
const slidesPerView = ref(2) // default value
const activeSlide = ref(0) // default to the first slide

const updateEffect = () => {
  if (window.innerWidth <= 650) {
    effect.value = 'cards'
    slidesPerView.value = 1 // show only one slide at a time
  } else {
    effect.value = 'coverflow'
    slidesPerView.value = 2 // show three slides at a time
  }
}

onMounted(() => {
  window.addEventListener('resize', updateEffect)
  updateEffect() // call once initially to set the correct effect on page load
})

onUnmounted(() => {
  window.removeEventListener('resize', updateEffect)
})

function onSlideChange (e: any) {
  activeSlide.value = e.detail[0].activeIndex
}
const currentProject = computed(() => {
  return projects[activeSlide.value].url
})

</script>

<style lang="scss">
:root {
    --swiper-navigation-color: white; // This is specifically for navigation arrows
    --swiper-pagination-fraction-color: white;
}

.swipper {
  @apply mx-auto;
  padding: 30px 0px;
  img {
    @apply max-h-[600px];
  }
}

.swiper-slide-shadow-left,
.swiper-slide-shadow-right {
  background-image: none;
}

.swiper-slide-prev,
.swiper-slide-next {
  opacity: 0.85;
}

// This is for the hover effect
.card {
  @apply mx-auto rounded-xl mb-6;
  .bg {
    @apply w-full h-full;
  }
}
a.button {
  @include button-base;
  @apply mt-4;
  background-color: $sea-serpent;
  color: $light-gray;
  font-weight: 600;
}

</style>

<template>
  <ClientOnly>
    <swiper-container
      :slides-per-view="slidesPerView"
      effect="cube"
      :centered-slides="true"
      :navigation="true"
      :loop="true"
      :pagination="{
        type: 'progressbar',
      }"
      @slide-change="onSlideChange"
    >
      <swiper-slide
        v-for="project in projects"
        :key="project.name"
        class="swipper"
      >
        <NuxtLink :to="project.url">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="card elevation-2"
              v-bind="props"
            >
              <v-img
                cover
                class="img"
                :src="project.mainImg"
              >
                <v-expand-transition>
                  <div
                    v-if="isHovering"
                    class="d-flex transition-fast-in-fast-out"
                    :style="`background-color: ${project.color_bg_logo}`"
                    style="height: 100%; opacity: 0.85; backdrop-filter: blur(10px);"
                  >
                    <img :src="project.logo" :alt="`${project.name} logo`" class="logo">
                  </div>
                </v-expand-transition>
              </v-img>
              <div class="text text-center" :style="`background-color: ${project.color_bg_title}`">
                <h3
                  :style="`color: ${project.color_title}`"
                  class="whitespace-nowrap p-1 text-lg font-bold sm:p-3 sm:text-2xl"
                >
                  {{ project.name }}
                </h3>
              </div>
            </v-card>
          </v-hover>
        </NuxtLink>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
  <div class="mt-6 text-center">
    {{ activeSlide + 1 }} / {{ projects.length }}
  </div>
  <div class="mt-12 text-center">
    <NuxtLink data-aos="fade-down" :to="currentProject" class="button">
      Dive in
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { register } from 'swiper/element/bundle'
import projects from '~/assets/data/projects.json'
register()
const slidesPerView = ref(1)
const activeSlide = ref(0) // default to the first slide

function onSlideChange (e: any) {
  console.log('changed')
  console.log(e)
  activeSlide.value = e.detail[0].activeIndex
}

const currentProject = computed(() => {
  return projects[activeSlide.value].url
})

</script>

<style lang="scss">
:root {
  --swiper-pagination-color: #F89F76;
  --swiper-pagination-progressbar-bg-color: #55C5CA;
  --swiper-pagination-fraction-color: #F9A077;
  --swiper-navigation-color: #55C5CA; // This is specifically for navigation arrows
}

.swipper {
  @apply pt-12;
}

.card {
  @apply h-full max-h-[550px] flex-shrink-0;
  .img {
    @apply h-[450px];
  }
  .logo {
    @apply mx-auto object-contain max-w-[50%] py-4;
  }
}

a.button {
  @include button-base;
  @apply mt-4;
  background-color: $font-color;
  color: $background-color;
  font-weight: 600;
}
</style>

<template>
  <ClientOnly>
    <swiper-container
      :slides-per-view="1"
      effect="cube"
      :centered-slides="true"
      :navigation="true"
      class="mx-auto max-w-3xl"
      :pagination="{
        type: 'progressbar',
      }"
      @swiperslidechange="onSlideChange"
    >
      <swiper-slide
        v-for="project in projects"
        :key="project.name"
        class="swipper pb-8"
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
const activeSlide = ref(0) // default to the first slide

const currentProject = computed(() => {
  return projects[activeSlide.value].url
})

function onSlideChange (e: any) {
  activeSlide.value = e.detail[0].activeIndex
}

</script>

<style lang="scss">
:root {
  --swiper-pagination-color: #F89F76;
  --swiper-pagination-progressbar-bg-color: #55C5CA;
  --swiper-navigation-color: #55C5CA; // This is specifically for navigation arrows
}

.swipper {
  @apply pt-12;
}

.card {
  @apply h-full max-h-[606px] flex-shrink-0 mx-auto;
  aspect-ratio: 1/1;
  .img {
    @apply h-[550px];
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

div.swiper-button-prev,
div > div.swiper-button-prev {
  margin-left: -5rem !important;
}
</style>

<template>
  <section class="flex items-center justify-center px-12">
    <div ref="scrollContainer" class="flex overflow-x-auto">
      <div
        v-for="project in Projects"
        :key="project.name"
        class="card shrink-0"
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
                    class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 text-center"
                    :style="`background-color: ${project.color_bg_logo}`"
                    style="height: 100%; opacity: 0.85; backdrop-filter: blur(10px);"
                  >
                    <img :src="project.logo" :alt="`${project.name} logo`" class="mx-auto object-contain px-10">
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
      </div>
    </div>
  </section>
  <div class="mt-12 text-center">
    <NuxtLink data-aos="fade-down" href="/projects/oculid" class="button">
      Dive in
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { ref, onBeforeUnmount } from 'vue'
import Projects from '~~/assets/data/projects.json'

const scrollContainer = ref<HTMLElement | null>(null)
let scrollInterval: number

onBeforeUnmount(() => {
  clearInterval(scrollInterval) // Clear the interval when the component is destroyed.
})

// Uncomment to enable scrolling
// let direction = 1 // 1 for left-to-right, -1 for right-to-left

// onMounted(() => {
//   const container = scrollContainer.value
//   const scrollAmount = 350 // This is the width of a card. Adjust if needed.

//   scrollInterval = window.setInterval(() => {
//     if (!container) { return }

//     if (direction === 1 && (container.scrollLeft + container.offsetWidth >= container.scrollWidth)) {
//       direction = -1 // Reverse direction to right-to-left
//     } else if (direction === -1 && container.scrollLeft === 0) {
//       direction = 1 // Reverse direction to left-to-right
//     }

//     container.scrollTo({
//       left: container.scrollLeft + (scrollAmount * direction),
//       behavior: 'smooth'
//     })
//   }, 6000)
// })
</script>

<style lang="scss" scoped>
.card {
  @apply w-[200px] sm:w-[350px] sm:h-[406px] h-full flex-shrink-0 sm:mr-8 mr-4;
  .img {
    @apply sm:h-[350px] h-[200px];
  }
}

.overflow-x-auto {
  @apply -mx-8;
}

a.button {
  @include button-base;
  @apply mt-4;
  background-color: $font-color;
  color: $background-color;
  font-weight: 600;
}
</style>

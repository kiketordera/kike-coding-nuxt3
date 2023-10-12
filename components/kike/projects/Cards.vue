<template>
  <section>
    <div ref="scrollContainer" class="flex w-full snap-x snap-mandatory overflow-scroll">
      <div v-for="project in Projects" :key="project.name" class="card mr-8">
        <NuxtLink :to="project.url">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="elevation-2 rounded-0 mx-auto snap-start"
              width="350"
              height="402"
              v-bind="props"
            >
              <v-img
                :aspect-ratio="16/9"
                contain
                height="350"
                width="350"
                :src="project.img"
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
                  class="py-3 text-2xl font-bold"
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
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Projects from '~~/assets/data/projects.json'

const scrollContainer = ref<HTMLElement | null>(null)
let scrollInterval: number
let direction = 1 // 1 for left-to-right, -1 for right-to-left

onMounted(() => {
  const container = scrollContainer.value
  const scrollAmount = 350 // This is the width of a card. Adjust if needed.

  scrollInterval = window.setInterval(() => {
    if (!container) { return }

    if (direction === 1 && (container.scrollLeft + container.offsetWidth >= container.scrollWidth)) {
      direction = -1 // Reverse direction to right-to-left
    } else if (direction === -1 && container.scrollLeft === 0) {
      direction = 1 // Reverse direction to left-to-right
    }

    container.scrollTo({
      left: container.scrollLeft + (scrollAmount * direction),
      behavior: 'smooth'
    })
  }, 6000)
})

onBeforeUnmount(() => {
  clearInterval(scrollInterval) // Clear the interval when the component is destroyed.
})

</script>

<style lang="scss" scoped>

</style>

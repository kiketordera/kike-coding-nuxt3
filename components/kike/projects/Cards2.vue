<template>
  <section>
    <div class="flex w-full snap-x snap-mandatory overflow-scroll">
      <div v-for="project in Projects" :key="project.name" class="card mr-8">
        <a :href="project.url">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              class="elevation-2 mx-auto snap-start rounded-lg"
              width="350"
              height="424"
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
                  class="text-h3 py-3 font-bold"
                >
                  {{ project.name }}
                </h3>
              </div>
            </v-card>
          </v-hover>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import Projects from '~~/assets/data/projects.json'

</script>

<style lang="scss" scoped>

</style>

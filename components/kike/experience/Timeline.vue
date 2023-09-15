<template>
  <div class="intro">
    <div class="content">
      <h2 data-aos="fade-up">
        My Experience
      </h2>
      <p data-aos="zoom-in-right">
        Explore my professional journey and expertise through my comprehensive work experience section
      </p>
    </div>
  </div>
  <v-timeline side="end" direction="horizontal" class="content">
    <v-timeline-item
      v-for="exp in rev"
      :key="exp.title"

      width="500"
      height="550"
      class="experience"
    >
      <template #opposite>
        <div class="text-center">
          <img :src="exp.img" class="logo" :alt="`Logo ${exp.nameCompany}`">
          <p class="mb-1 mt-2 text-center">
            {{ exp.startDate }}
          </p>
          <p class="text-center">
            {{ exp.durationMonths }}
          </p>
        </div>
      </template>
      <div :class="exp.type">
        <p class="title">
          {  {{ exp.title }} }
        </p>
        <p class="title place">
          { {{ exp.nameCompany }} }
        </p>
        <p v-for="text in exp.description" :key="text" class="description">
          {{ text }}
        </p>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts" setup>
import experiences from '~/assets/data/work-experience.json'

const rev = experiences.reverse()
</script>

<style lang="scss" scoped>

 .intro {
  // background-color: white;
  .content {
    @apply max-w-6xl mx-auto flex justify-between items-center gap-12 px-4;
  }
    h2 {
      @include title-kike-section;
    }
    p {
      @apply text-base w-full;
    }
  }
.content {
  @apply overflow-x-scroll overflow-y-hidden w-full pt-12 gap-0;
  // background-color: white;
  .experience {
    @apply mb-12;
    .logo {
      @apply max-w-[60rem] max-h-[4rem] mx-auto;
    }
    span {
      @apply mx-auto;
    }
    p.title {
      @apply text-2xl font-bold pt-2 px-4;
      color: white;
    }
    p.place {
      @apply text-base font-bold px-4 pt-0;
      color: black;
    }
    p {
      @apply mx-4 text-justify text-center;
    }
    p.description {
      @apply mt-3;
    }
    & .work {
      p.title {
        background-color: $sea-serpent;
      }
    }
    & .education {
      p.title {
        background-color: $light-salmon;
      }
    }
    & .volunteer {
      p.title {
        background-color: $cyber-yellow;
      }
    }
  }
}
</style>

<style lang="scss">
.v-timeline-divider__before,
.v-timeline-divider__after {
  width: 100% !important;
}
</style>

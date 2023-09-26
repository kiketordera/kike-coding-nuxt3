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
  <v-timeline line-thickness="1" align="start" side="end" :line-color="'white'" class="content">
    <v-timeline-item
      v-for="exp in rev"
      :key="exp.title"
      max-width="750px"
      :dot-color="getColor(exp.type)"
      class="experience"
    >
      <template #opposite>
        <div class="hidden text-center sm:block">
          <img :src="exp.img" class="logo" :alt="`Logo ${exp.nameCompany}`">
          <p class="mx-auto mb-1 mt-2">
            {{ exp.startDate }}
          </p>
          <p class="mx-auto font-bold">
            {{ exp.durationMonths }}
          </p>
        </div>
      </template>
      <div :class="exp.type">
        <p class="title rounded-t-md">
          {  {{ exp.title }} }
        </p>
        <p class="title place rounded-b-md">
          { {{ exp.nameCompany }} }
        </p>
        <div class="ml-4 block text-center sm:hidden">
          <p class="mx-auto mb-1 mt-2">
            {{ exp.startDate }}
          </p>
          <p class="mx-auto font-bold" style="color: white;">
            {{ exp.durationMonths }}
          </p>
        </div>
        <p v-for="text in exp.description" :key="text" class="description">
          {{ text }}
        </p>
        <div class="chips">
          <div v-for="chip in exp.skills" :key="chip" class="chip">
            {{ chip }}
          </div>
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts" setup>
import experiences from '~/assets/data/work-experience.json'

const rev = await experiences.reverse()

function getColor (tpe: string) {
  if (tpe === 'work') {
    return '#55C5CA' // Blue
  } else if (tpe === 'education') {
    return '#F89F76' // Orange
  } else if (tpe === 'volunteer') {
    return '#63B190' // Green
  }
}
</script>

<style lang="scss" scoped>

 .intro {
  .content {
    @apply max-w-6xl mx-auto flex justify-between items-center gap-12 px-4 py-16 mt-24;
    h2 {
      @include title-kike-section;
      @apply w-1/3;
    }
    p {
      @apply text-base w-2/3 ml-8;
    }
  }
  }
.content {
  @apply overflow-x-scroll overflow-y-hidden w-full pt-12 gap-0;
  .experience {
    @apply mb-12 max-w-sm;
    .logo {
      @apply max-w-[60rem] max-h-[5rem] py-2 px-4 rounded-md max-w-full;
      background-color: white;
    }
    span {
      @apply mx-auto;
    }
    p.title {
      @apply text-2xl font-bold pt-2 px-4;
      color: white;
    }
    p.place {
      @apply text-base font-bold px-4 pt-0 pb-2;
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
        background-color: $branding-green;
      }
    }
  }
}

.chips {
  @apply flex flex-wrap gap-3 mt-8 mx-4 pb-16 sm:pb-24;
  .chip {
    @apply rounded-full px-3 py-1 text-xs;
    background-color: $light-gray;
    color: $dark-gray;
    font-family: 'Source Code Pro SemiBold';
  }
}
</style>

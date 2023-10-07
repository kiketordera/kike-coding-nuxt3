<template>
  <div id="work">
    <div class="intro">
      <div class="content" style="padding-top: 150px; margin-top: -150px;">
        <h2 data-aos="fade-up">
          My Experience
        </h2>
        <p data-aos="zoom-in-right">
          Explore my professional journey and expertise through my comprehensive work experience section
        </p>
      </div>
      <div class="links">
        <NuxtLink :to="`/#work${firstWorkIndex}`" class="work">
          Work
        </NuxtLink>
        <hr>
        <NuxtLink :to="`/#volunteer${firstVolunteerIndex}`" class="volunteer">
          Volunteer
        </NuxtLink>
        <hr>
        <NuxtLink :to="`/#education${firstEducationIndex}`" class="education">
          Education
        </NuxtLink>
      </div>
    </div>
    <v-timeline line-thickness="1" align="start" side="end" :line-color="'white'" class="content">
      <v-timeline-item
        v-for="(exp, index) in rev"
        :key="exp.title"
        max-width="750px"
        :dot-color="getColor(exp.type)"
        class="experience"
      >
        <template #opposite>
          <div class="hidden text-center sm:block">
            <img :src="exp.img" class="logo" :alt="`Logo ${exp.nameCompany}`">
            <p class="mx-auto mb-1 mt-2 text-center">
              {{ exp.startDate }}
            </p>
            <p class="mx-auto text-center font-bold text-white">
              {{ exp.durationMonths }}
            </p>
          </div>
        </template>
        <div :id="`${exp.type}${index}`" :class="exp.type" style="padding-top: 100px; margin-top: -100px;">
          <p class="title rounded-t-md">
            {  {{ exp.title }} }
          </p>
          <p class="title place rounded-b-md">
            {{ exp.nameCompany }}
          </p>
          <div class="mx-auto block text-center sm:hidden">
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
  </div>
</template>

<script lang="ts" setup>
import experiences from '~/assets/data/work-experience.json'

const rev = [...experiences].reverse()

function getColor (tpe: string) {
  if (tpe === 'work') {
    return '#55C5CA' // Blue
  } else if (tpe === 'education') {
    return '#F89F76' // Orange
  } else if (tpe === 'volunteer') {
    return '#FCD405' // Yellow
  }
}

const firstWorkIndex = rev.findIndex(exp => exp.type === 'work')
const firstVolunteerIndex = rev.findIndex(exp => exp.type === 'volunteer')
const firstEducationIndex = rev.findIndex(exp => exp.type === 'education')
</script>

<style lang="scss" scoped>

 .intro {
   .content {
     @apply max-w-6xl mx-auto block sm:flex justify-between items-center gap-12 px-4 py-16;
     h2 {
       @include title-kike-section;
       @apply sm:w-1/3;
     }
     p {
       @apply text-base w-2/3 sm:ml-8;
     }
   }
  .links {
    @apply flex justify-center items-center gap-8;
    hr {
      @apply h-[20px];
      border: .5px solid $light-gray;
    }
    a {
      @apply text-base font-bold;
      text-decoration: none;
      &.work {
        color: $sea-serpent;
      }
      &.education {
        color: $light-salmon;
      }
      &.volunteer {
        color: $cyber-yellow;
      }
    }
  }
  }
.content {
  @apply overflow-x-scroll overflow-y-hidden w-full pt-12 gap-0;
  .experience {
    @apply mb-12 max-w-sm;
    .logo {
      @apply max-w-[60rem] max-h-[5rem] py-2 px-4 rounded-md max-w-full mx-auto min-h-[80px];
      background-color: white;
    }
    span {
      @apply mx-auto;
    }
    p.title {
      @apply text-2xl font-bold -mt-1;
      color: white;
    }
    p.place {
      @apply text-base font-bold py-2;
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
        color: $sea-serpent;
        font-family: $source-code-black;
      }
    }
    & .education {
      p.title {
        color: $light-salmon;
        font-family: $source-code-black;
      }
    }
    & .volunteer {
      p.title {
        color: $cyber-yellow;
        font-family: $source-code-black;
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
    font-family: $source-code-semibold;
    border: 1px solid;
  }
}
</style>

<style>

.v-timeline--vertical.v-timeline .v-timeline-item:first-child .v-timeline-divider,
.v-timeline--vertical.v-timeline .v-timeline-item:first-child .v-timeline-item__opposite,
.v-timeline--vertical.v-timeline .v-timeline-item:first-child .v-timeline-item__body {
  padding-block-start: 0px;
}
</style>

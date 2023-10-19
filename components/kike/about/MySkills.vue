<template>
  <section>
    <div class="skills">
      <h2 data-aos="fade-up">
        My Skills
      </h2>
      <div class="info">
        <p data-aos="zoom-in-right">
          Discover my range of skills and expertise in various areas.
        </p>
        <kike-about-Languages />
        <hr>
        <kike-about-Programming />
        <hr>
        <kike-about-Skills :skills="leadershipSkills" :title="'Leadership Skills'" :color="'#55C5CA'" class="pb-12" />
        <kike-about-Skills :skills="softSkills" :title="'Soft Skills'" />
        <button type="button" @click="whatsAppState.toggleModal()">
          Hire me
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { WhatsAppStateProvider } from '~/store/whatsapp'

const whatsAppState = WhatsAppStateProvider()

const softSkills = [
  'Communication',
  'TeamWork',
  'Problem-solving',
  'Time management',
  'Adaptability',
  'Leadership',
  'Empathy',
  'Conflict Resolution',
  'Creativity'
]

const leadershipSkills = [
  'Critical Thinking',
  'Strategic Planning',
  'Conflict Resolution',
  'Decision Making',
  'Visionary Thinking',
  'Team Building & Motivation',
  'Strategic Planning',
  'Emotional Intelligence',
  'Effective Communication'
]
</script>

<style lang="scss" scoped>
section {
  @apply w-full py-2 mx-auto;

  .skills {
    @apply max-w-6xl flex gap-2 lg:flex-row flex-col mx-auto px-4;

    h2 {
      @apply lg:text-4xl text-3xl tracking-wider mb-4 lg:w-1/2 mb-8;
      font-family: $source-code-bold;
      font-weight: 600;
      color: $h2-color;
    }

    .info {
      @apply w-full text-justify;

      p {
        @apply lg:text-lg my-6 items-start;
        color: $h2-color;
        &:first-child {
          @apply mt-0;
        }
      }

    }

    hr {
      @apply my-4;
      border-color: #595959;
    }
  }
}
button {
    @include button-base;
    @apply my-8 block sm:w-min whitespace-nowrap;
    background-color: $button-color;
    color: $background-color;
    font-weight: 600;
}
</style>

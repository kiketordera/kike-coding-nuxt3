<template>
  <section>
    <hr>
    <div class="content">
      <NuxtLink :to="projects[getPrev()].url" aria-label="Previous project">
        Previous Project
      </NuxtLink>
      <NuxtLink to="/" aria-label="All project">
        <img class="float-center" src="/svg/pramid.svg" alt="All project icon">
      </NuxtLink>
      <NuxtLink :to="projects[getNext()].url" aria-label="Next project">
        Next Project
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { default: projects } = await import('~/assets/data/projects.json')

const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
})

function getNext (): number {
  return (props.index + 1) % projects.length
}

function getPrev (): number {
  return (props.index - 1 + projects.length) % projects.length
}
</script>
<style lang="scss" scoped>
section {
  @apply max-w-6xl mx-auto py-12 items-center;
  .content {
    @apply py-8 justify-around lg:gap-6 gap-4 items-center flex w-full;
    a {
      @apply text-sm lg:text-lg uppercase cursor-pointer;
      color: $h2-color;
    }
  }
  hr {
    @apply w-full;
    border-color: #595959;
  }
}
</style>

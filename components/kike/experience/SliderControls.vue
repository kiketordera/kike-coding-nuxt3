<template>
  <section>
    <hr>
    <div class="content">
      <NuxtLink :to="projects[getPrev()].url" aria-label="Previous project">
        <div class="button">
          <p>
            Previous Project
          </p>
        </div>
      </NuxtLink>
      <NuxtLink to="/" aria-label="All project">
        <img class="float-center" src="/svg/pramid.svg" alt="All project icon">
      </NuxtLink>
      <NuxtLink :to="projects[getNext()].url" aria-label="Next project">
        <div class="button">
          <p>
            Next Project
          </p>
        </div>
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
    .button {
      @apply flex items-center lg:gap-2 uppercase;
      p {
        @apply text-sm lg:text-lg;
        color: #595959;
      }
    }
  }
  hr {
    @apply w-full;
    border-color: #595959;
  }
}
</style>

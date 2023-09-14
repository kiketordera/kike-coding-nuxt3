<template>
  <div class="soft-skill" :style="`--soft-skill-color: ${props.color}`">
    <h3>
      {{ title }}
    </h3>
    <div class="timeline">
      <div v-for="skill in props.skills" :key="skill">
        <p>
          {{ skill }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  skills: {
    type: Array<string>,
    required: true,
    default: []
  },
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: '#FCD405'
  }
})
</script>

<style lang="scss" scoped>
.soft-skill {
  @apply py-4 w-full;
  h3 {
    @apply lg:text-4xl text-xl tracking-wider mb-6 my-8;
    font-family: "Source Code Pro Bold";
    font-weight: 600;
    color: var(--soft-skill-color);
  }
  .timeline {
    @apply grid lg:grid-cols-3 grid-cols-2 items-center gap-4 mb-3 text-sm;
    div {
      @apply px-3 py-4 text-center flex items-center h-full justify-center;
      border: 2px solid white;
      color: white;
    }
  }
}
</style>

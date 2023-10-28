<template>
  <div class="info">
    <h2 data-aos="fade-right">
      {{ props.title }}
    </h2>
    <div data-aos="fade-left">
      <p v-for="d in props.description" :key="d">
        {{ d }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: Array<string>,
    required: true,
  },
})

</script>

<style lang="scss" scoped>
.info {
  @apply flex lg:flex-row flex-col
  py-10 mx-auto max-w-6xl px-4 gap-4;

  h2 {
    @apply text-2xl lg:w-1/3 mb-4 align-top;
    font-family: $source-code-semibold;
    color: white;
  }
  div {
    @apply lg:w-2/3;
    p {
      @apply text-base text-justify pb-7;
    }
  }
}

</style>

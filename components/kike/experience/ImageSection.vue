<template>
  <div class="images">
    <img
      v-for="img in props.links"
      :key="img"
      :src="img"
      alt=""
    >
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  links: {
    type: Array<string>,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.images {
    @apply flex items-center w-full gap-10 py-16 max-w-full overflow-x-scroll;
    img {
        @apply max-h-[700px];
    }
}

</style>

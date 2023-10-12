<template>
  <div class="showcase-img">
    <img
      v-for="(img, i) in props.links"
      :key="img"
      :src="img"
      alt=""
      :class="{ 'span': isFirst(i) || isLastAndEven(i) }"
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

const isEven = props.links.length % 2 === 0

function isFirst (index: number) {
  return index === 0
}

function isLastAndEven (index: number) {
  if (!isEven) { return false }
  return index === props.links.length - 1
}

</script>

<style lang="scss" scoped>
.showcase-img {
    @apply max-w-6xl w-full mx-auto px-4 py-12
    grid lg:grid-rows-2 lg:grid-cols-11 grid-cols-1 gap-3;
    img {
      @apply object-cover w-full h-full h-[350px] lg:col-span-5;
      &.span{
        @apply lg:col-span-6;
      }
    }

}
</style>

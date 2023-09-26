<template>
  <div class="scroll-parent">
    <div class="scroll-element" :class="props.scrollRight ? 'left-primary' : 'right-primary'">
      <img v-for="(image, index) in props.images" :key="index" :src="image" alt="">
    </div>
    <div class="scroll-element" :class="props.scrollRight ? 'left-secundary' : 'right-secundary'">
      <img v-for="(image, index) in props.images" :key="index" :src="image" alt="">
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  images: {
    type: Array<string>,
    required: true,
    default: []
  },
  scrollRight: {
    type: Boolean,
    required: true,
  }
})
</script>

<style lang="scss" scoped>

$animation-duration: 35s;

.scroll-parent {
  position: relative;
  width: 100vw;
  height: 6.5rem;
  min-width: 100vw;
  @media screen and (max-width: 768px) {
    height: 5.2rem;
  }
  @media screen and (max-width: 480px) {
    height: 4rem;
  }
  overflow-x: hidden;
}

.scroll-element {
  width: inherit;
  height: inherit;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-height: 4rem;
    gap: 0.8rem;
  }
  @media screen and (max-width: 480px) {
    gap: 0.7rem;
    max-height: 3rem;
  }
  img {
    object-fit: contain;
    max-width: 140px;
    margin-right: 4rem;
  }

  overflow: hidden;
  animation: left-primary $animation-duration linear infinite;
}
.left-primary {
  animation: left-primary $animation-duration linear infinite;
}

.left-secundary {
  animation: left-secundary $animation-duration linear infinite;
}

@keyframes left-primary {
  from {
    left: 0%;
  }
  to {
    left: -100%;
  }
}

@keyframes left-secundary {
  from {
    left: 100%;
  }
  to {
    left: 0%;
  }
}
.right-primary {
  animation: right-primary $animation-duration linear infinite;
}

.right-secundary {
  animation: right-secundary $animation-duration linear infinite;
}
@keyframes right-primary {
  from {
    left: -100%;
  }
  to {
    left: 0%;
  }
}

@keyframes right-secundary {
  from {
    left: 0%;
  }
  to {
    left: 100%;
  }
}
</style>

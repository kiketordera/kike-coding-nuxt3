
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
  min-width: 1100px;
  @media screen and (max-width: 768px) {
    height: 5.2rem;
    min-width: 900px;
  }
  @media screen and (max-width: 480px) {
    height: 4rem;
    min-width: 650px;
  }
  overflow-x: hidden;
}

.scroll-element {
  width: inherit;
  height: inherit;
  position: absolute;
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  left: 0%;
  top: 0%;
  margin-top: 1rem;
  min-width: 100%;
  max-height: 5rem;
  img {
    object-fit: contain;
    max-width: 70px;
    max-height: 80px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 0.8rem;
    max-height: 4rem;
    gap: 0.8rem;
  }
  @media screen and (max-width: 480px) {
    margin-top: 0.5rem;
    gap: 0.7rem;
    max-height: 3rem;
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

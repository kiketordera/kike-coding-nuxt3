<template>
  <div class="content">
    <img v-if="left && !mobile" :src="`/img/vv/boundaries/${props.image}`" alt="">
    <div class="text">
      <div class="title">
        <img class="icon" src="`/svg/vv/boundaries/${props.svg}`" alt="lock-img">
        <h2>
          {{ props.title }}
        </h2>
      </div>
      <p>{{ props.text }}</p>
    </div>
    <img v-if="!left && !mobile" :src="`/img/vv/boundaries/${props.image}`" alt="">
    <img v-if="mobile" :src="`/img/vv/boundaries/${props.image}`" :class="{ 'mobile-image': mobile }" alt="">
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const mobile = ref(true)

onMounted(() => {
  const mediaQuery = window.matchMedia('(max-width: 640px)')

  const updateMobile = () => {
    mobile.value = mediaQuery.matches
  }

  // Call our function when the matchMedia state changes
  mediaQuery.addEventListener('change', updateMobile)

  // Initial check
  updateMobile()

  // Make sure to remove event listener when component is unmounted
  onBeforeUnmount(() => {
    mediaQuery.removeEventListener('change', updateMobile)
  })
})

const props = defineProps({

    image: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    left: {
      type: Boolean,
      required: true,
    }
})

</script>

<style lang="scss" scoped>

.mobile-image {
  max-height: 300px;
  width: fit-content;
  margin: 0 auto;
  padding-top: 1rem;
}

.content {
  @apply max-w-2xl px-4 mx-auto flex flex-col sm:flex-row;
  img:not(.icon) {
    @apply max-w-sm px-4 sm:max-h-[420px] sm:block;
  }
}
.title {
  @apply flex items-center pb-2;
  img {
    @apply w-10 h-10 pr-4;
  }
}
 h2 {
    @apply text-4xl;
  }
</style>

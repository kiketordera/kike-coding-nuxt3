<template>
  <div class="bg">
    <div class="content mt-24">
      <div class="text">
        <div class="title">
          <img class="icon" src="~/assets/svg/vv/dashboard-bg-pink.svg" alt="icon">
          <h2>
            Dashboard
          </h2>
        </div>
        <p class="mt-4 text-justify">
          Having an understanding and clean menu is basic to create confidence in the use of the system.
          The main menu is a collection of icons labeled with a small description and divided into 3 categories:
        </p>
        <ul class="my-4 text-justify">
          <li> <b>-Services:</b> these are custom services that you can create depending on your necessities.</li>
          <li> <b>-Actions:</b> these are the global actions that you can make across all services that you create.</li>
          <li><b>-Logout:</b> to close your session</li>
        </ul>
      </div>
      <img src="~assets/img/vv/design-dashboard.png" :class="{ 'mobile-image': mobile }" alt="">
    </div>
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

</script>

<style lang="scss" scoped>

.bg {
  @apply pt-2 pb-16 mt-24;
  background-color: $branding-pink;
}

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
  .text {
    color: white;
  }
}
.title {
  @apply flex items-center pb-2;
  img {
    @apply w-14 h-10 pr-4;
  }
}
 h2 {
    @apply text-2xl md:text-4xl;
  }
</style>

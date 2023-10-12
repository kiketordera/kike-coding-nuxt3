<template>
  <div class="info">
    <h2>About the project</h2>
    <p>
      Kikenya Tours transcends traditional travel offerings, bringing forth a platform for adventurers worldwide to explore the
      compelling beauties and cultures of Kenya and East Africa. We're dedicated to providing immersive experiences that resonate
      with the diverse preferences of all tourists. By showcasing the best of Kenya and East Africa,
      Kikenya Tours ensures your journey is not just a trip but a lifelong memory etched in the sands of Africa's great landscapes.
    </p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.info {
  @apply flex lg:flex-row flex-col
  py-10 mx-auto max-w-6xl px-4;

  h2 {
    @apply text-2xl lg:w-1/3 mb-4 align-top;
    color: white;
  }
  p {
    @apply text-base lg:w-2/3;
  }
}

</style>

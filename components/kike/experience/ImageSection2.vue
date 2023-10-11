<template>
  <div class="images">
    <img src="/img/projects/oculid/face.svg" alt="">
    <img src="/img/projects/oculid/face.svg" alt="">
    <img src="/img/projects/oculid/face.svg" alt="">
    <img src="/img/projects/oculid/face.svg" alt="">
    <img src="/img/projects/oculid/face.svg" alt="">
    <img src="/img/projects/oculid/face.svg" alt="">
    <img src="/img/projects/oculid/face.svg" alt="">
    <img src="/img/projects/oculid/face.svg" alt="">
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.images {
    @apply grid lg:grid-cols-4 grid-cols-1 items-center gap-10 py-16;
    img {
        @apply w-full bg-cover;
    }
}

</style>

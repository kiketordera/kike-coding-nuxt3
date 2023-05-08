<template>
  <div class="background">
    <kike-index-Information />
    <kike-index-Skills />
    <kike-index-About />
    <kike-projects-Work />
    <kike-projects-Cards />
    <kike-experience-Timeline />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layouts: 'default',
})

</script>

<style lang="scss" scoped>
.background {
    background-color: #131212;
 color: #595959;
}

</style>

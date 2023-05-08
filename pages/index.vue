<template>
  <div class="background">
    <kike-general-NavBar />
    <kike-index-Information />
    <kike-index-Skills />
    <kike-index-About />
    <kike-projects-Work />
    <kike-experience-Timeline />
    <kike-general-Footer />
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
 scroll-snap-type: y mandatory;
}

</style>

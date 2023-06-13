<template>
  <div>
    <kike-general-NavBar />
    <kike-index-Information />
    <kike-index-Skills />
    <kike-index-About />
    <kike-projects-Work />
    <kike-experience-Timeline />
    <kike-general-Footer />
    <kike-general-TotemSignature />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layouts: 'default',
})

</script>

<style lang="scss" scoped>
* {
  background-color: #131212;
  color: #595959;
  font-family: "Source Code Pro Regular";
}

</style>

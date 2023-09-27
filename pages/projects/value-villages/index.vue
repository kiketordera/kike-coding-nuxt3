<template>
  <div>
    <vv-general-NavBar />
    <vv-about-Introduction />
    <vv-about-LandingBackground />
    <vv-about-ItemsCards />
    <vv-about-Information />
    <vv-about-GradientBackground />
    <vv-about-Iconography />
    <vv-about-GradientBackgroundTwo />
    <vv-about-Track />
    <vv-about-Team />
    <vv-about-Awards />
    <vv-about-Support />
  </div>
</template>

<script lang="ts" setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: 'vv',
})
</script>

<style lang="scss" scoped>
* {
    font-family: $nunito-regular;
}
</style>

<template>
  <div class="main">
    <kike-experience-Intro :client="project?.client" />
    <kike-experience-Information />
    <kike-experience-ImageSection />
    <kike-experience-Info />
    <kike-experience-ImageSection2 />
    <hr>
    <kike-experience-SliderPanel />
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
const { default: projects } = await import('~/assets/data/projects.json')

const route = useRoute()
const link = route.params.project_id
const project = projects.find(a => a.url === `/projects/${link}`)
</script>

<style lang="scss" scoped>
* {
  color: #CCCCCC;
  font-family: $source-code-regular;
}
.main {
   @apply max-w-6xl mx-auto px-4 items-center text-justify;
}

</style>

<template>
  <div>
    <div>
      <kike-experience-Intro
        :client="project.client"
        :services="project.intro.services"
        :tech="project.intro.tech"
        :cover-img="project.mainImg"
        :year="project.intro.year"
        :url="project.intro.url"
      />
      <kike-experience-Information :title="project.firstTitle" :description="project.firstDescription" />
      <kike-projects-ImageSection :links="project.firstGroupImages" />
      <kike-experience-Information :title="project.secondtitle" :description="project.secondDescription" />
      <kike-experience-ImageCarousel :imgs="project?.secondGroupImages" :type="project.imagesType" />
      <kike-experience-SliderControls :index="project?.id" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
const { default: projects } = await import('~/assets/data/projects.json')

const route = useRoute()
const link = route.params.project_id
const project = projects.find(a => a.url === `/projects/${link}`)!

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

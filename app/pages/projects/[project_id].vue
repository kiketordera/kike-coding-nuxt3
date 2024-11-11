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

import type { Project }  from '~/types/types';
const projects = await getI18nJson<Project>('projects')

const route = useRoute()
const link = route.params.project_id as string
const project = projects.find((a: Project) => a.url === `/projects/${link}`)!

const config = useRuntimeConfig()
useSeoMeta({
  title: `${config.public.site?.name} | ${project.name}`,
  description: project.firstDescription[0],
})
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

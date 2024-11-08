<template>
  <div>
    <KikeIndexInformation />
    <general-ContinuousScroll />
    <kike-index-About />
    <kike-projects-Work />
    <kike-experience-Timeline />
    <general-WhatsApp />
    <kike-general-GetTouch />
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
useSeoMeta({
  title: `${config.public.site?.name} | Creating digital masterpieces`,
  description: 'Discover my expertise as a UX/UI engineer and mobile developer. Explore innovative projects and insights into seamless user experiences and cutting-edge software solutions. Let’s create digital magic together!',
})
</script>
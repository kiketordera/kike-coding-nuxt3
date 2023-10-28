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
definePageMeta({
  layout: 'vv',
})

useSeoMeta({
  title: 'Totem Studio | Value Villages - Empowering the community through a sustainable and inclusive marketplace',
  // eslint-disable-next-line max-len
  description: 'Empowering Communities through Scalable Education and Vocational Training. Dive into an open-source, multi-platform web app tailored for NGOs fighting poverty and inequality. Experience a blend of video-tutorials, real-time progress tracking, and user-friendly interfaces, all designed to uplift local communities. From fair-trade operations to traditional product manufacturing, Value Villages offers a cost-effective solution for scalable education, ensuring every individual, even those without literacy, can grasp their earnings and contributions. Awarded for innovation, this platform bridges the gap between technology and empowerment.',
})
</script>

<style lang="scss" scoped>
* {
    font-family: $nunito-regular;
    background-color: white;
}
</style>

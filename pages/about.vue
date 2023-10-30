<template>
  <div>
    <KikeAboutInfo />
    <KikeAboutMySkills />
    <GeneralWhatsApp />
  </div>
</template>

<script lang="ts" setup>
useSeoMeta({
  title: 'Kike Tordera - About Me | Berlin-Based Developer & Designer',
  // eslint-disable-next-line max-len
  description: 'Dive into the journey of Kike Tordera, a Berlin-based tech enthusiast blending coding expertise with design passion. Discover a unique blend of technical skills, international experiences, and a commitment to crafting exceptional digital experiences. Explore proficiency in multiple languages, coding platforms, and leadership qualities that set Kike apart in the tech world.',
})
</script>

<style lang="scss" scoped>
* {
  background-color: #131212;
  color: #595959;
  font-family: $source-code-regular;
}

</style>

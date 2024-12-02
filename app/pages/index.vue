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
const { t } = useI18n();
const config = useRuntimeConfig()
useSeoMeta({
  title: `${config.public.site?.name} | ${t("titleSEOIndex")}`,
  description: t("descriptionSEOIndex"),
})


</script>
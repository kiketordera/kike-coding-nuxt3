<template>
  <div>
    <KikeIndexInformation />
    <general-ContinuousScroll />
    <kike-index-About />
    <div id="expereince">
      <kike-projects-Work />
      <kike-experience-Timeline />
    </div>
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
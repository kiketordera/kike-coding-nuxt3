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

useSeoMeta({
  title: `${t('seo.valueVillages.home.title')}`,
  description: t('seo.valueVillages.home.description'),
});
</script>
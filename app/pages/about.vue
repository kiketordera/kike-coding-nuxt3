<template>
  <div>
    <KikeAboutInfo />
    <KikeAboutMySkills />
    <GeneralWhatsApp />
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();

useSeoMeta({
  title: `${t('seo.valueVillages.design.title')}`,
  description: t('seo.valueVillages.design.description'),
});
</script>

<style lang="scss" scoped>
* {
  background-color: #131212;
  color: #595959;
  font-family: $source-code-regular;
}

</style>

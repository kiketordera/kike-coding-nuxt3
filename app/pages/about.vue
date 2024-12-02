<template>
  <div>
    <KikeAboutInfo />
    <KikeAboutMySkills />
    <GeneralWhatsApp />
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n();
const config = useRuntimeConfig()
useSeoMeta({
  title: `${config.public.site?.name} | ${t("titleSEOAboutUs")}`,
  description: t("descriptionSEOAboutUs"),
})
</script>

<style lang="scss" scoped>
* {
  background-color: #131212;
  color: #595959;
  font-family: $source-code-regular;
}

</style>

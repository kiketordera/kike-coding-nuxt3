<template>
  <main>
    <Breadcrumbs>
      <template #breadcrumb="{ to, title }">
        <NuxtLink :to="to">
          {{ title }}
        </NuxtLink>
      </template>
    </Breadcrumbs>
    <SeoKit />
    <SchemaOrgPerson
      :name="siteMeta.name"
      :image="siteMeta.image"
      :same-as="siteMeta.sameAs"
    />
    <CookieControl locale="en" />
    <kike-general-NavBar />
    <kike-index-Information />
    <kike-index-Skills />
    <kike-index-About />
    <kike-projects-Work />
    <kike-experience-Timeline />
    <kike-general-Footer />
    <kike-general-TotemSignature />
  </main>
</template>

<script lang="ts" setup>
const siteMeta = useSiteMeta()
defineOgImageScreenshot({
  title: siteMeta.name,
  provider: 'browser',
  delay: 1000,
  colorScheme: 'dark',
  mask: '.cookieControl'
  // background: 'linear-gradient(to bottom, #D95B06, #DA3203)'
})

definePageMeta({
  layouts: 'default',
})
const {
  cookiesEnabledIds,
} = useCookieControl()
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      (!previous?.includes('ga') &&
        current?.includes('ga'))
    ) {
      useGtagConsent(true)
      // cookie with id `google-analytics` got added
      // placeholder for your custom change handler
    }
  },
  { deep: true }
)
if (cookiesEnabledIds.value !== undefined && cookiesEnabledIds.value.includes('ga')) {
  useGtagConsent(true)
}

</script>

<style lang="scss" scoped>
* {
  background-color: #131212;
  color: #595959;
  font-family: "Source Code Pro Regular";
}

</style>

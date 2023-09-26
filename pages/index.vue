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
    <CookieControl v-if="showCookieConsent" locale="en" />
    <kike-index-Information />
    <infinite-slide-bar>
      <general-InfiniteScroll :images="skills" :scroll-right="true" />
    </infinite-slide-bar>
    <kike-index-About />
    <!-- <kike-projects-Work /> -->
    <kike-experience-Timeline />
  </main>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import InfiniteSlideBar from 'vue3-infinite-slide-bar'

defineComponent({
    components: {
        'infinite-slide-bar': InfiniteSlideBar
    }
})

const skills = [
'/svg/kk/skills/html5.svg',
'/svg/kk/skills/css3.svg',
'/svg/kk/skills/dart.svg',
'/svg/kk/skills/docker.svg',
'/svg/kk/skills/firebase.svg',
'/svg/kk/skills/flutter.svg',
'/svg/kk/skills/golang.svg',
'/svg/kk/skills/java.svg',
'/svg/kk/skills/js.svg',
'/svg/kk/skills/node.svg',
'/svg/kk/skills/nuxt.svg',
'/svg/kk/skills/swift.svg',
'/svg/kk/skills/tailwind.svg',
'/svg/kk/skills/ts.svg',
'/svg/kk/skills/ux.svg',
'/svg/kk/skills/ui.svg',
'/svg/kk/skills/vue.svg',
]

const siteMeta = useSiteMeta()
const showCookieConsent = ref(false)
onMounted(() => {
  waitToShowConsent()
})
const waitToShowConsent = () => {
      // Set the timer to fire after 2 seconds.
      setTimeout(() => {
        // Do something after 2 seconds.
        showCookieConsent.value = true
      }, 4000)
    }
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

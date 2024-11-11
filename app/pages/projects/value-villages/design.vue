<template>
  <div>
    <h1>
      {{ $t('designSection.title') }}
    </h1>
    <vv-design-Info
      class="mt-28"
      icon="lock-color.svg"
      :texts="auth"
      image="authenication.png"
      :left="true"
      :title="$t('designSection.authTitle')"
    />
    <vv-design-Dashboard />
    <vv-design-Info
      class="mt-28"
      icon="alphabet-color.svg"
      :texts="numerical"
      image="design-num.png"
      :left="true"
      :title="$t('designSection.numericalTitle')"
    />
    <div class="bg-blue">
      <vv-design-Info
        class="mt-28"
        icon="performance-bg-blue.svg"
        :texts="performance"
        image="vikapu.png"
        :left="false"
        :title="$t('designSection.performanceTitle')"
      />
    </div>
    <vv-design-Info
      class="mt-28"
      icon="video-color.svg"
      :texts="video"
      image="vikapu.png"
      :left="true"
      :title="$t('designSection.videoTitle')"
    />
    <vv-design-BackgroundImage />
  </div>
</template>


<script lang="ts" setup>

// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: 'vv',
})

const { t } = useI18n();
useSeoMeta({
  title: `${t('seo.valueVillages.design.title')}`,
  description: t('seo.valueVillages.design.description'),
});

const auth = [
  t('designSection.auth.description1'),
  t('designSection.auth.description2')
];

const numerical = [
  t('designSection.numerical.description1'),
  t('designSection.numerical.description2')
];

const performance = [
  t('designSection.performance.description1'),
  t('designSection.performance.description2')
];

const video = [
  t('designSection.video.description1'),
  t('designSection.video.description2')
];

</script>

<style lang="scss" scoped>
* {
    font-family: $nunito-regular;
    background-color: white;
}

.bg-blue {
  @apply pt-2 pb-16 mt-24;
  background-color: $branding-blue !important;
  .content {
    background-color: $branding-blue;

  }
}

  h1 {
    font-size: 2.4rem;
    padding-top: 7rem;
    text-align: center;
    letter-spacing: 4px;
    font-weight: 400;
  }

  @media screen and (min-width: 482px) and (max-width:768px) {
    h1 {
      font-size: 2rem;
      margin-top: 2.5rem;
    }
  }
</style>

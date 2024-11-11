<template>
  <section>
    <div class="card-items">
    <div class="items">
      <NuxtImg src="/img/vv/workshop.png" alt="" />
      <p>
        {{ $t('valueVillagesSection.cards.softwarePlatform') }}
      </p>
    </div>
    <div class="items">
      <img src="/img/vv/carousel/performance-color.svg" alt="">
      <p>
        {{ $t('valueVillagesSection.cards.videoTutorials') }}
      </p>
    </div>
    <div class="items">
      <img src="~assets/svg/vv/wifi.svg" alt="">
      <p>
        {{ $t('valueVillagesSection.cards.offlineInstallation') }}
      </p>
    </div>
  </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply max-w-full px-8;
  width: 100%;
  margin: 0 auto;

  .card-items {
    @apply flex flex-row items-center gap-8 justify-between max-w-7xl mx-auto;

    .items {
      @apply max-w-sm;

      img {
        max-width: 5rem;
        max-height: 6rem;
        padding: 1rem 0rem;
        margin: 0rem auto;
      }

      p {
        @apply items-center mt-2 tracking-wider text-justify;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .card-items {
      @apply flex flex-col mb-4;
    }
  }
}
</style>

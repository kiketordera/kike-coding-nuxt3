<template>
  <section>
    <div class="village">
      <NuxtImg data-aos="zoom-in" src="/img/vv/logo.png" alt="" class="logo" />
      <h1 data-aos="zoom-in">
        {{ $t('valueVillagesSection.title') }}
      </h1>
      <p data-aos="fade-up">
        {{ $t('valueVillagesSection.openSource') }}
      </p>
      <p data-aos="fade-up">
        {{ $t('valueVillagesSection.customisable') }}
      </p>
      <p data-aos="fade-up">
        {{ $t('valueVillagesSection.fullSet') }}
      </p>
    </div>
  </section>
</template>


<style lang="scss" scoped>
section {
  max-width: 72rem;
  margin: 0 auto;
  padding: 0rem 1rem;
  padding-top: 6rem;
  padding-bottom: 2rem;

  .village {
    @apply max-w-6xl;
    width: 100%;
    text-align: center;

    .logo {
      @apply w-full mx-auto;
      max-width: 12rem;
      height: cover;
      vertical-align: middle;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    h1 {
      @apply text-6xl mb-6;
      font-size: 2rem;
      font-weight: 600;
    }

    p {
      @apply text-base;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 400;
      letter-spacing: 1px;
    }

    @media screen and (max-width: 700px) {
      h1 {
        @apply text-2xl mb-3 w-full;
      }

      p {
        font-size: 1rem;
      }
      .logo {
        max-width: 9rem;
      }
    }
  }
}
</style>

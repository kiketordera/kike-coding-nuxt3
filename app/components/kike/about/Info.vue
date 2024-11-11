<template>
  <section>
    <div class="about-us">
      <h2 data-aos="zoom-in-up">
    {{ $t('aboutSection.title') }}
  </h2>
      <div class="info">
        <p data-aos="fade-right">
    {{ $t('aboutSection.intro') }}
  </p>
  <p data-aos="fade-right">
    {{ $t('aboutSection.codingPassion') }}
  </p>
  <p data-aos="fade-right">
    {{ $t('aboutSection.craftingExperiences') }}
  </p>
  <p data-aos="fade-right">
    {{ $t('aboutSection.createMagic') }}
  </p>
        <NuxtImg src="/img/kk/kike.jpg" alt="" class="profile" />
        <button data-aos="zoom-up-down" type="submit">
    <img src="~assets/svg/kk/resume.svg" alt="">
    <a href="/kike-tordera-cv-human.pdf">
      {{ $t('resumeSection.downloadHuman') }}
    </a>
  </button>
  <button data-aos="zoom-up-down" type="submit">
    <img src="~assets/svg/kk/resume.svg" alt="">
    <a href="/kike-tordera-cv-ats.pdf">
      {{ $t('resumeSection.downloadATS') }}
    </a>
  </button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply w-full py-40 mx-auto;

  .about-us {
    @apply max-w-6xl flex gap-2 lg:flex-row flex-col mx-auto px-4;

    h2 {
      @include title-kike-section;
      @apply w-1/3;
    }

    .info {
      @apply lg:w-2/3 w-full text-justify;

      p {
        @apply lg:text-lg my-6 items-start;
        color: $h2-color;
        &:first-child {
          @apply mt-0;
        }
      }

      button {
        @apply text-base uppercase flex gap-3 mt-5 text-center lg:w-auto w-full;
        color: $background-color;
        font-weight: 600;

        span {
          color: $h2-color;
        }
      }
    }
  }
}</style>

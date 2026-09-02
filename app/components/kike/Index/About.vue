<template>
  <section id="about">
    <div class="about">
      <h2 data-aos="fade-up">{{ $t("aboutSection.title") }}</h2>
      <div class="info">
        <p>
          {{ $t("introSection.passionate") }}
          <span class="blue">{{ $t("introSection.mobileDeveloper") }}</span>
          {{ $t("introSection.withExpertise") }}
          <span class="orange">{{ $t("introSection.uxUiDesign") }}</span
          >,
          {{ $t("introSection.specializing") }}
        </p>
        <p>
          {{ $t("introSection.skills") }}
        </p>
        <p>
          {{ $t("introSection.innovate") }}
        </p>
        <p data-aos="zoom-in-right">
          {{ $t("introSection.build") }}
          <br>
          <span class="blue">{{ $t("introSection.blend") }}</span>
        </p>
        <p>
          {{ $t("introSection.collaborate") }}
        </p>
        <br>
        <NuxtLink data-aos="fade-down" href="/about">
          {{ $t("introSection.readMore") }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply w-full;

  .about {
    @apply max-w-6xl mx-auto lg:flex lg:flex-row flex-col py-36 w-full lg:mx-auto px-4;

    h2 {
      @include title-kike-section;
    }

    .info {
      @apply lg:w-3/4 w-full text-justify;
      color: $h2-color;

      p {
        @apply lg:text-lg my-5 items-start;
        &:first-of-type {
          @apply mt-0;
        }
        span {
          &.blue {
            color: $sea-serpent;
          }
          &.orange {
            color: $light-salmon;
          }
        }
      }

      a {
        @include button-base;
        @apply mt-4;
        background-color: $font-color;
        color: $background-color;
        font-weight: 600;
      }
    }
  }
}
</style>

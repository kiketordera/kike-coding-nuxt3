<template>
  <div class="program">
    <h3 data-aos="fade-up">
      {{ $t('educationSection.title') }}
    </h3>
    <div class="edu">
      <div class="left">
        <img src="/svg/kk/upv.svg" alt="">
        <p>{{ $t('educationSection.upv.duration') }}</p>
        <p class="duration">
          {{ $t('educationSection.upv.length') }}
        </p>
      </div>
      <div class="right">
        <p class="title">
          {{ $t('educationSection.upv.university') }}
        </p>
        <p class="subtitle">
          {{ $t('educationSection.upv.degree') }}
        </p>
        <p class="description">
          {{ $t('educationSection.upv.description') }}
        </p>
      </div>
    </div>
    <div class="edu">
      <div class="left">
        <img src="/svg/kk/czech.svg" alt="">
        <p>{{ $t('educationSection.czech.duration') }}</p>
        <p class="duration">
          {{ $t('educationSection.czech.length') }}
        </p>
      </div>
      <div class="right">
        <p class="title">
          {{ $t('educationSection.czech.university') }}
        </p>
        <p class="subtitle">
          {{ $t('educationSection.czech.degree') }}
        </p>
        <p class="description">
          {{ $t('educationSection.czech.description') }}
        </p>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.program {
  @apply py-4 w-full;

  h3 {
    @apply lg:text-4xl text-xl tracking-wider mb-6 my-8;
    font-family: $source-code-bold;
    color: $title-color;
  }

    .edu {
      @apply flex gap-8 mt-8;
      .left {
        @apply text-center;
        img {
          @apply max-w-[60rem] max-h-[5rem] mx-auto;
        }
        p {
          @apply whitespace-nowrap mt-4;
          color: $h2-color;
        }
        .duration {
          @apply font-bold mt-1.5 text-base;
          color: white;
        }
      }
      .right {
        @apply -mt-1;
        p.title {
          @apply text-xl sm:text-2xl font-bold -mt-1;
          color: $light-salmon;
          font-family: $source-code-bold;
        }
        p.subtitle {
          @apply font-bold text-lg;
          font-family: $source-code-semibold;
          color: $cyber-yellow;
        }
        p.description {
          @apply mt-2;
          color: $h2-color;
        }
      }
    }
  }
</style>

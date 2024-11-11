<template>
  <section>
    <div class="gradient">
      <div class="info">
        <h2>
          {{ $t('gradientSection.mindYourStep.title') }}
        </h2>
        <p>
          {{ $t('gradientSection.mindYourStep.description') }}
        </p>
        <NuxtImg src="/img/vv/video.png" alt="" />
      </div>
      <div class="item">
        <NuxtImg src="/img/vv/transactions.png" alt="" />
        <h2>
          {{ $t('gradientSection.yourProduction.title') }}
        </h2>
        <p>
          {{ $t('gradientSection.yourProduction.description') }}
        </p>
      </div>
      <div class="info dis">
        <h2>
          {{ $t('gradientSection.numericalAlphabet.title') }}
        </h2>
        <p>
          {{ $t('gradientSection.numericalAlphabet.description') }}
        </p>
        <NuxtImg src="/img/vv/index.png" alt="" />
      </div>
      <div class="item dis">
        <NuxtImg src="/img/vv/track.png" alt="" />
        <h2>
          {{ $t('gradientSection.controlledAndSafe.title') }}
        </h2>
        <p>
          {{ $t('gradientSection.controlledAndSafe.description') }}
        </p>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
section {
  @apply w-full;

  // background: linear-gradient(#89ffc5 0%, rgba(21, 174, 255, 0.83) 33%,
  //     #35b9ff 47.29%, #6e81ff 100%);
   background-color: $branding-green;
  color: white;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
  background-position: center;
  background-size: cover;
  padding: 0rem 0rem;

  .gradient {
    @apply flex flex-row justify-between gap-10 max-w-7xl mx-auto px-4;

    .info,
    .item {
      @apply min-h-full flex flex-col;
      h2 {
        @apply text-2xl tracking-wider mt-6;
        font-weight: 600;
      }

      p {
        @apply text-base my-5 px-3;
      }
    }
    .item {
      @apply align-top;
    }

    .info {
      @apply justify-end;
    }

    .dis {
      display: flex;
      @media screen and (max-width: 790px) {
        display: none;
      }
    }
  }
}
</style>

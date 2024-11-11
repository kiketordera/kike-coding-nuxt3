<template>
  <section>
    <h2>{{ $t('awardsSection.title') }}</h2>
    <div class="award">
      <p data-aos="zoom-out-up">
      {{ $t('awardsSection.description') }}
    </p>
      <a data-aos="zoom-out-up" href="https://blogthinkbig.com/">
        <NuxtImg src="/img/vv/think-big.jpeg" alt="" />
      </a>
      <a data-aos="zoom-out-up" href="https://www.fundaciontelefonica.com/">
        <NuxtImg src="/img/vv/telefonica.png" alt="" />
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply max-w-7xl px-4 mx-auto;
  width: 100%;
  padding: 1rem;

  h2 {
    @apply text-4xl my-4;
  }

  .award {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0rem;
    gap: 3rem;

    p {
      font-size: 1rem;
      text-align: left;
      line-height: 1.5rem;
      letter-spacing: 0.05em;
    }

    img {
      @apply max-w-[15rem];
      max-height: 7rem;
    }
  }

  @media screen and (max-width: 768px) {
    .award {
      @apply mb-3;
      flex-direction: column;
    }
  }
}
</style>

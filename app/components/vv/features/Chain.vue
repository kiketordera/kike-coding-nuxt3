<template>
  <section>
    <div class="system">
      <div class="title">
        <img src="~/assets/svg/vv/qr.svg" alt="">
        <p>
          {{ $t('trackItemsSection.title', { items: $t('trackItemsSection.items') }) }}
        </p>
      </div>
      <div data-aos="zoom-out-up" class="info">
        <p>
          {{ $t('trackItemsSection.description1') }}
        </p>
        <p>
          {{ $t('trackItemsSection.description2') }}
        </p>
        <ul>
          <li>
            {{ $t('trackItemsSection.useCase1') }}
          </li>
          <li>
            {{ $t('trackItemsSection.useCase2') }}
          </li>
          <li>
            {{ $t('trackItemsSection.useCase3') }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 2rem 0rem;

  .system {
    margin-bottom: 2rem;
    font-weight: 400;

    .title {
      @apply px-4;
      display: flex;
      justify-content: center;
      justify-items: center;
      padding-bottom: 1rem;
      align-items: center;

      img {
        height: 60px;
      }

      p {
        font-size: 2.4rem;
        text-align: center;
        padding-left: 1.5rem;
        font-weight: 900;

        span {
          color: #ED037C;
        }

      }

      @media screen and (max-width: 768px) {
        p {
          @apply text-xl mb-2;
        }

        img {
          @apply w-10 h-auto;
        }
      }
    }

    .info {
      margin: 0 auto;
      width: 100%;
      max-width: 48rem;

      p,
      ul li{
        @apply text-base md:text-xl;
      }

      ul {
        list-style-type: circle;
        padding: 1rem 2rem;
      }

      @media screen and (max-width: 700px) {
        p {
          @apply text-base mb-2 px-4;
        }
      }
    }

  }
}
</style>

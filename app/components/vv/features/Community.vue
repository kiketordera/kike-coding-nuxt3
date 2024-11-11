<template>
  <section>
    <div class="community">
      <div class="title">
        <img data-aos="fade-right" src="~/assets/svg/vv/hunt.svg" alt="">
        <p data-aos="fade-left">
          {{ $t('communitySection.title', { community: $t('communitySection.community'), people: $t('communitySection.people') }) }}
        </p>
      </div>

      <div data-aos="zoom-out-up" class="info">
        <p>
          {{ $t('communitySection.description1') }}
        </p>
        <p>
          {{ $t('communitySection.description2') }}
        </p>
        <p>
          {{ $t('communitySection.description3') }}
        </p>
      </div>

      <div data-aos="zoom-out-up" class="structure">
        <NuxtImg src="/img/vv/graph.png" alt="" />
      </div>
      <p data-aos="fade-up" class="content">
        {{ $t('communitySection.footer') }}
      </p>
    </div>
  </section>
</template>


<style lang="scss" scoped>
section {
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 6rem 0rem;

  .community {
    width: 100%;
    margin-bottom: 2rem;
    font-weight: 400;

    .title {
      @apply px-2;
      display: flex;
      justify-content: center;
      justify-items: center;
      padding-bottom: 1rem;
      align-items: center;
      gap: 2rem;
      align-items: center;

      img {
        height: 50px;
      }

      p {
        @apply font-semibold;
        font-size: 2.4rem;
        text-align: center;
        span {
          color: #f7941d;
        }
      }

      @media screen and (max-width: 768px) {
        p {
          @apply text-xl;
        }

        img {
          @apply w-10 h-auto;
        }
      }
    }

    .info {
      margin: 0 auto;
      width: 100%;
      @apply max-w-2xl;

      p {
          @apply text-base md:text-xl text-justify;
      }

      @media screen and (max-width: 768px) {
        p {
          @apply px-4 mb-2 text-base;
        }
      }
    }

    .structure,
    .map {
      margin: 0 auto;
      max-width: 48rem;
      padding-top: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;

      img {
        height: auto;
        max-width: 100%;

      }
    }

    .map {

      width: 100%;
      max-width: 900px;
      padding-top: 6rem;
      margin-top: -80px;
      margin-bottom: 10px;
    }

    .content {
        @apply text-base md:text-xl text-justify px-4 mx-auto max-w-2xl;
    }

  }
}
</style>

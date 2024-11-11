<template>
  <section>
    <div class="system">
      <div class="title">
        <img src="~/assets/svg/vv/report.svg" alt="">
        <p>
          {{ $t('reportsSection.title', { reports: $t('reportsSection.reports'), analysis: $t('reportsSection.analysis') }) }}
        </p>
      </div>
      <div data-aos="zoom-out-up" class="info">
        <p>
          {{ $t('reportsSection.description1') }}
        </p>
        <p>
          {{ $t('reportsSection.description2') }}
        </p>
        <p>
          {{ $t('reportsSection.description3') }}
        </p>
        <p>
          {{ $t('reportsSection.description4') }}
        </p>
      </div>
      <div data-aos="zoom-out-up" class="box-img">
        <NuxtImg src="/img/vv/excel.png" class="-mt-8 mb-3" alt="" />
      </div>
      <div data-aos="zoom-out-up" class="info">
        <p>
          {{ $t('reportsSection.excelDescription') }}
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 3rem 0rem;

  .system {
    margin-bottom: 2rem;
    font-weight: 400;

    .title {
      display: flex;
      justify-content: center;
      justify-items: center;
      padding-bottom: 1rem;
      align-items: center;
      @apply px-4;

      img {
        height: 60px;
      }

      p {
        font-size: 2.4rem;
        text-align: center;
        padding-left: 1.5rem;
        font-weight: 900;

        span {
          color: #F7941D;
        }

      }

      @media screen and (max-width: 768px) {
        p {
           @apply text-base md:text-xl text-justify;
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
      @apply px-4;
      p {
        align-items: center;
        text-align: justify;
        font-size: 20px;
        padding-bottom: 2rem;
        padding-top: 0.5rem;
        width: 95%;
      }

      @media screen and (max-width: 768px) {
        p {
          @apply text-base mb-2;
        }

      }
    }

    .box-img {
      margin: 0 auto;
      padding-top: 1rem;

      img {
        @apply w-10/12;
        height: auto;
        max-width: 100%;
        padding: 0rem 20rem;
      }

      @media screen and (max-width:700px) {
        img {
          @apply px-4 w-12 mx-auto;
          min-width: 25%;

        }
      }
    }

  }
}
</style>

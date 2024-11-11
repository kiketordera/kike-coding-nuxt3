<template>
  <section>
    <div class="system">
      <div class="title">
        <img src="~/assets/svg/vv/youtube-bg-blue.svg" alt="">
        <p>
          {{ $t('stepByStepSection.title', { step: $t('stepByStepSection.step'), tutorials: $t('stepByStepSection.tutorials') }) }}
        </p>
      </div>
      <div data-aos="zoom-out-up" class="info">
        <p>
          {{ $t('stepByStepSection.description1') }}
        </p>
        <p>
          {{ $t('stepByStepSection.description2') }}
        </p>
        <p>
          {{ $t('stepByStepSection.description3') }}
        </p>
      </div>
      <div class="box-img mt-4">
        <div data-aos="zoom-in-right" class="details">
          <NuxtImg src="/img/vv/system.png" alt="" />
          <p>
            {{ $t('stepByStepSection.createCourses') }}
          </p>
        </div>
        <div data-aos="zoom-in-up" class="details">
          <NuxtImg src="/img/vv/vikapu.png" alt="" />
          <p>
            {{ $t('stepByStepSection.guidingSteps') }}
          </p>
        </div>
        <div data-aos="zoom-in-left" class="details dis">
          <NuxtImg src="/img/vv/rings.png" alt="" />
          <p>
            {{ $t('stepByStepSection.records') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
section {
  width: 100%;
  padding: 6rem 0rem;
  background-color: $branding-blue;

  .system {
    margin: 0 auto;
    max-width: 56rem;
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
          color: white;
        }

      }

      @media screen and (max-width: 600px) {

        padding-bottom: 0.5rem;
        p {
          @apply text-base md:text-xl items-center;
        }

        img {
          @apply w-10 h-auto;
        }
      }
    }

    .info {
      @apply px-4;
      margin: 0 auto;
      width: 100%;
      max-width: 48rem;

      p {
        align-items: center;
        text-align: justify;
        font-size: 20px;
        padding-bottom: 2rem;
        padding-top: 0.5rem;
      }

      @media screen and (max-width: 700px) {
        p {
          @apply text-base;
        }

      }
    }

    .box-img {
      display: flex;
      flex-direction: row;
      margin: 0 auto;
      color: white;

      .details {
        align-items: center;

        img {
          height: auto;
          padding: 0rem 2rem;
        }

        p {
          text-align: center;
          margin-top: 1rem;
          @apply text-sm;
        }
      }
    }

    @media screen and (max-width: 700px) {
      .box-img {
         .details img {
          height: auto;
          padding: 0rem 1rem;
        }
        p {
          @apply pb-2 px-4;
        }
      }
    }

     @media screen and (max-width: 500px) {
      .dis {
        display: none;
      }
     }

  }
}
</style>

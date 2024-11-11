<template>
  <section>
    <h2 data-aos="zoom-out-up">
      {{ $t('technologiesSection.title') }}
    </h2>
    <div data-aos="zoom-out-up" class="card">
      <div class="card-items">
        <h4 class="vue">
          {{ $t('technologiesSection.vue.title') }}
        </h4>
        <p>
          {{ $t('technologiesSection.vue.description') }}
        </p>
      </div>
      <div class="card-items">
        <h4 class="bootstrap">
          {{ $t('technologiesSection.bootstrap.title') }}
        </h4>
        <p>
          {{ $t('technologiesSection.bootstrap.description') }}
        </p>
      </div>
      <div class="card-items">
        <h4 class="gin">
          {{ $t('technologiesSection.gin.title') }}
        </h4>
        <p>
          {{ $t('technologiesSection.gin.description') }}
        </p>
      </div>
    </div>
  </section>
</template>


<script>

</script>

<style lang="scss" scoped>
section {
  @apply pt-20;
  max-width: 56rem;
  margin: 0 auto;

  .offline-mode {
    margin-bottom: 1rem;

    .title {
      display: flex;
      justify-content: center;
      justify-items: center;
      align-items: center;
      padding: 1rem 0rem;
      margin: 0 auto;
      
      margin-bottom: 1rem;
      img {
        height: 60px;
      }

       p {
        @apply font-semibold px-4;
        font-size: 2.4rem;
        text-align: center;
        span {
          color: #f7941d;
        }
      }

      @media screen and (max-width: 768px) {
        p {
          @apply text-3xl;
        }

        img {
          @apply w-10 h-auto;
        }
      }
    }

    .info {
      p {
          @apply text-base md:text-xl text-justify px-4;
      }

      @media screen and (max-width: 768px) {
        p {
          @apply text-base mb-2 px-4;
        }
      }
    }
  }
}
</style>

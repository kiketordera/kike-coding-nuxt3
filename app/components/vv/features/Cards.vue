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


<style lang="scss" scoped>
section {
  max-width: 72rem;
  width: auto;
  margin: 0 auto;
  padding: 1rem 0rem;

  h2 {
    @apply font-bold px-4;
    font-size: 1.8rem;
    margin-top: 2rem;
  }

  .card {
    display: flex;
    flex-direction: row;
    gap: 3.6rem;
    padding: 1rem 1rem;

    .card-items {
      margin: 2rem 0rem;
      letter-spacing: 1px;

      h4 {
        font-size: 1.7rem;
        text-align: center;
        margin-bottom: 5px;
        font-weight: 600;

      }

      .vue {
        color: #41B883;

      }

      .bootstrap {
        color: #563E7D;
      }

      .gin {
        color: #D0AA00;
      }

      p {
        text-align: justify;
                max-width: 500px;
        margin: 0 auto;

      }
    }

  }

  @media screen and (max-width: 699px) {
    .card {
      flex-direction: column;
      margin-bottom: 1rem;
    }
  }
}
</style>

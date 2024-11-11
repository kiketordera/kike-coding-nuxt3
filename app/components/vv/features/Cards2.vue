<template>
  <section>
    <div data-aos="zoom-out-up" class="card">
    <div class="card-items">
      <h4 class="golang">
        {{ $t('technologiesSection.golang.title') }}
      </h4>
      <p>
        {{ $t('technologiesSection.golang.description') }}
      </p>
    </div>
    <div class="card-items">
      <h4 class="docker">
        {{ $t('technologiesSection.docker.title') }}
      </h4>
      <p>
        {{ $t('technologiesSection.docker.description') }}
      </p>
    </div>
    <div class="card-items">
      <h4 class="raspbian">
        {{ $t('technologiesSection.raspbian.title') }}
      </h4>
      <p>
        {{ $t('technologiesSection.raspbian.description') }}
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

  .card {
    display: flex;
    flex-direction: row;
    gap: 3.6rem;
    padding: 8rem 0rem 1rem 1rem;

    .card-items {
      margin: 2rem 0rem;
      letter-spacing: 1px;

      h4 {
        font-size: 1.7rem;
        text-align: center;
        margin-bottom: 5px;
        font-weight: 600;

      }

      .golang {
        color: #6AD7E5;

      }

      .docker {
        color: #00A3D2;
      }

      .raspbian {
        color: #CF1F26;
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

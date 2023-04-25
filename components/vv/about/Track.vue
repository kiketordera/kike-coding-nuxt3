<template>
  <section>
    <div class="system">
      <div class="title">
        <img data-aos="fade-left" src="~/assets/svg/vv/qr.svg" alt="">
        <p data-aos="fade-up">
          Track system incorporated
        </p>
      </div>
      <div data-aos="fade-up" class="info">
        <p>
          You can track all the process back, to know exactly which work was the one who made the final product.
        </p>
        <p>
          And you can enrich the client with close information about the worker,
          his culture, and create a connection between your client and your organization.
        </p>
        <p>
          Here is an idea you can see in the picture below: you can put the information in the aperture
          to let the client immerse into the culture right before taking the product in his hands.
        </p>
      </div>
      <div class="box-img">
        <img src="~assets/img/vv/box.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  margin: 0 auto;
  padding-top: 4rem;

  .system {
    margin-bottom: 2rem;
    font-weight: 400;

    .title {
      @apply px-4 gap-5;
      display: flex;
      justify-content: center;
      justify-items: center;
      padding-bottom: 1rem;
      align-items: center;

      img {
        height: 60px;
        max-width: 100%;
      }

      p {
        font-size: 2.4rem;
        text-align: center;
        font-weight: 600;

      }

      @media screen and (max-width: 768px) {
        p {
          @apply text-2xl;
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
      padding: 0rem 2rem;

      p {
        @apply text-base md:text-xl text-justify;
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
    }

    .box-img {
      margin: 0 auto;
      padding-top: 1rem;
      width: 100%;
      background: linear-gradient(#fefefe 0%, #e9e9e9 100%);

      img {
        height: auto;
        width: 100%;
        max-width: 660px;
        margin: 0 auto;
      }
    }
  }
}
</style>

<template>
  <section>
    <div class="community">
      <div class="title">
        <img src="~/assets/svg/vv/hunt.svg" alt="">
        <p>From the <span>community</span> to the <span>people</span> </p>
      </div>

      <div class="info">
        <p>
          You can have different locations (Villages), and you can also have custom services created by you in
          every
          village (like a barbershop, workshop, farm… there are a lot of icons all ready for you as samples or you
          can
          upload yours!).
        </p>
        <p>
          In every single service, you will have your inventory for materials and tools, your video courses to
          educate, the records of manufactured products, and the data digitalized.
        </p>
        <p>
          Also, you will be able to make deliveries to other services, track the items, and make payments.
        </p>
      </div>

      <div class="structure">
        <img src="~/assets/img/graph.png" alt="">
      </div>
      <p class="content">
        To serve the different villages and communities, there are 6 languages included, what gives you a huge
        coverage over the world map:
      </p>
      <div class="map">
        <img src="~/assets/svg/vv/world-map.svg" alt="">
      </div>
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

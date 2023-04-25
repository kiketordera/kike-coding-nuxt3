<template>
  <section>
    <div class="offline-mode">
      <div class="title">
        <img src="~assets/svg/vv/wifi.svg" alt="">
        <p>
          Offline Mode
        </p>
      </div>
      <div class="info">
        <p>
          We acknowledge the situation of incomunicación in some rural areas, and especially the remotes areas
          where
          NGOs have more action, so we prepare the software from the begging to be able to run in remote areas.
          For
          less than 50 $ you can create your own remote server with a RaspberryPI, and sync with the cloud with a
          USB
          stick when you reach the network. It also features the latest technologies in the marker to be
          future-proof.
        </p>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
  max-width: 56rem;
  margin: 0 auto;

  .offline-mode {
    margin-bottom: 1rem;

    .title {
      display: flex;
      justify-content: center;
      justify-items: center;
      padding-bottom: 1rem;
      align-items: center;
      padding: 1rem 0rem;
      margin: 0 auto;

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

<template>
  <section>
    <div class="offline-mode">
      <div class="title">
        <img src="~assets/svg/wifi.svg" alt="">
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
        <p>
          Technologies used to carry out the project :
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
      gap: 3rem;
      margin: 0 auto;

      img {
        height: 60px;
      }

      p {
        font-size: 2.5rem;
        text-align: center;
        font-weight: 500;
        letter-spacing: 1px;

        span {
          color: #f7941d;
        }
      }

      @media screen and (max-width: 768px) {
        p {
          @apply text-3xl mb-2 px-4;
        }

        img {
          @apply w-10 h-auto;
        }
      }
    }

    .info {
      p {

        font-size: 1.3rem;
        text-align: justify;
        padding-top: 10px;
        font-weight: 400;
        margin-bottom: 1rem;
        align-items: center;
        padding: 0rem 1rem;
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

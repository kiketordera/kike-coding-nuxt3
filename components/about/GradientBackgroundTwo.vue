<template>
  <section>
    <div class="gradient">
      <div class="info">
        <h2>
          Mind your step!
        </h2>
        <p>
          Guided step by step procedures to ensure a high-quality production, with videos, audios,
          warnings and graphical representation of the materials and tools.
        </p>
        <img src="~assets/img/video.png" alt="">
      </div>
      <div class="item">
        <img src="~assets/img/transactions.png" alt="">
        <h2>Your production</h2>
        <p>
          An easy and clear view of the products made, the payments, earnings, and accountability of your work. Don't miss a number!
        </p>
      </div>
      <div class="info dis">
        <h2>Numerical alphabet</h2>
        <p>
          Numerical alphabet designed specifically for illiterate people, to fully understand how much are they earning even
          without knowing how to read or write.
        </p>
        <img src="~assets/img/index.png" alt="">
      </div>
      <div class="item dis">
        <img src="~assets/img/track.png" alt="">
        <h2>
          Controlled and safe
        </h2>
        <p>
          Easily make periodic inventories of your things, creating a custom form with the possibility to take photos of
          the item and even to track it with a QR code
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply w-full;

  background: linear-gradient(#89ffc5 0%, rgba(21, 174, 255, 0.83) 33%,
      #35b9ff 47.29%, #6e81ff 100%);
  color: white;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
  background-position: center;
  background-size: cover;
  padding: 0rem 0rem;

  .gradient {
    @apply flex flex-row justify-between gap-10 max-w-7xl mx-auto px-4;

    .info,
    .item {
      @apply min-h-full flex flex-col;
      h2 {
        @apply text-2xl tracking-wider mt-6;
        font-weight: 600;
      }

      p {
        @apply text-base my-5 px-3;
      }
    }
    .item {
      @apply align-top;
    }

    .info {
      @apply justify-end;
    }

    .dis {
      display: flex;
      @media screen and (max-width: 790px) {
        display: none;
      }
    }
  }
}
</style>

<template>
  <section>
    <div class="system">
      <div class="title">
        <img src="~/assets/svg/vv/qr.svg" alt="">
        <p>
          Track <span>items</span> in the whole chain
        </p>
      </div>
      <div class="info">
        <p>
          In order to track every tool and every product manufactured (so we can see every single worker
          involved in his manufacturing), there is the option to track items in an easy, fast and secure way: QR
          codes.
        </p>
        <p>
          Every item has a unique identifier number, that is represented by the QR. The cases of use of the QR
          are:
        </p>
        <p>
          -Every time we want to give a tool to a worker, for example, we will scan the QR and it will be
          registered that this exact tool was given to a specific worker, so he will be responsible for that and
          the tool won’t just disappear.
        </p>
        <p>
          -Every time someone wants to make a delivery, if the item is traceable, they will need to scan the QR
          codes in order
          to deliver from one service to another, so you can not deliver a wrong thing as long as everything is
          digitalized.
        </p>
        <p>
          -Every time the customer receives a manufactured product from the organization, he will be able to see
          every worker that
          was involved in the manufacturing process of the product.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 2rem 0rem;

  .system {
    margin-bottom: 2rem;
    font-weight: 400;

    .title {
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
          color: #ED037C;
        }

      }

      @media screen and (max-width: 768px) {
        p {
          @apply text-xl mb-2;
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
        align-items: center;
        text-align: justify;
        font-size: 20px;
        padding-bottom: 2rem;
        padding-top: 0.5rem;
        width: 95%;
      }

      @media screen and (max-width: 700px) {
        p {
          @apply text-base mb-2 px-4;
        }
      }
    }

  }
}
</style>

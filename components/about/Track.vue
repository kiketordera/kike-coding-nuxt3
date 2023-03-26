<template>
  <section>
    <div class="system">
      <div class="title">
        <img src="~/assets/svg/qr.svg" alt="">
        <p>
          Track system incorporated
        </p>
      </div>
      <div class="info">
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
        <img src="~assets/img/box.png" alt="">
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
  padding: 6rem 0rem;

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

      }
    }

    .info {
      font-family: 'Raleway' !important;
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
    }

    .box-img {
      margin: 0 auto;
      padding-top: 1rem;
      background: linear-gradient(#fefefe 0%, #e9e9e9 100%);

      img {
        height: auto;
        max-width: 100%;
      }
    }

  }
}
</style>

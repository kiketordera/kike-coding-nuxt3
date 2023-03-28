<template>
  <section>
    <h2>Awards From</h2>
    <div class="award">
      <p>
        First and third positions in the 2 categories of the competition “Hack for Good” from Telefonica Foundation
        in the Polytechnic University of Valencia, Spain.
        2018 Edition.
      </p>
      <a href="#">

        <img src="~assets/img/think-big.jpeg" alt="">
      </a>
      <a href="#">

        <img src="~assets/img/telefonica.png" alt="">
      </a>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
section {
  @apply max-w-6xl px-4 mx-auto;
  width: 100%;
  text-align: center;
  padding: 2rem 0rem;

  h2 {
    @apply text-4xl my-4;
  }

  .award {
    @apply flex flex-row w-full gap-12 items-center py-10;

    p {
      @apply text-base w-1/2 text-left tracking-wider;
    }

    img {
      margin-right: -40px;
      max-width: 400px;
      max-height: 200px;
    }
  }

  @media screen and (max-width: 768px) {
    .award {
      @apply flex-col mb-3 px-4;

      p {
        @apply w-full;
      }

      img {
        @apply w-48 h-auto;
      }
    }

  }
}
</style>

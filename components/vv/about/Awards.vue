<template>
  <section>
    <h2>Awards From</h2>
    <div class="award">
      <p>
        First and third positions in the 2 categories of the competition “Hack for Good” from Telefonica Foundation
        in the Polytechnic University of Valencia, Spain.
        2018 Edition.
      </p>
      <a href="https://blogthinkbig.com/">
        <img src="~assets/img/vv/think-big.jpeg" alt="">
      </a>
      <a href="https://www.fundaciontelefonica.com/">
        <img src="~assets/img/vv/telefonica.png" alt="">
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply max-w-7xl px-4 mx-auto;
  width: 100%;
  padding: 1rem;

  h2 {
    @apply text-4xl my-4;
  }

  .award {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0rem;
    gap: 3rem;

    p {
      font-size: 1rem;
      text-align: left;
      line-height: 1.5rem;
      letter-spacing: 0.05em;
    }

    img {
      @apply max-w-[15rem];
      max-height: 7rem;
    }
  }

  @media screen and (max-width: 768px) {
    .award {
      @apply mb-3;
      flex-direction: column;
    }
  }
}
</style>

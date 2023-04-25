<template>
  <section>
    <img src="~assets/img/vv/main.png" alt="" class="background">
    <p>
      All necessary functionality for NGOs who work in the ground fighting poverty and inequality.
      Workflow specialized on empowering people through knowledge and
      vocational training for fair trade operations.
    </p>
  </section>
</template>

<style lang="scss" scoped>
section {
  max-width: 100%;
  margin: 0 auto;
  padding: 0.6rem 1rem;
  text-align: center;

  img {
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    background-position: center;
    background-size: cover;
    padding-bottom: 1rem;;
  }

  p {
    @apply text-2xl py-6 px-4 max-w-6xl;
    font-weight: 500;
    letter-spacing: 1.7px;
    text-align: center;
    margin: 0 auto;
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    p {
      @apply text-base w-full px-4;
    }
  }
}
</style>

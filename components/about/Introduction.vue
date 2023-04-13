<template>
  <section>
    <div class="village">
      <img src="~assets/img/vv-logo.png" alt="" class="logo">
      <h1>Welcome to Value Villages Web App</h1>
      <p>
        Open source, easy to use,
      </p>
      <p>
        customisable, multi-platform.
      </p>
      <p>
        A full set right out of the box for everyone!
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  max-width: 72rem;
  margin: 0 auto;
  padding: 6rem 1rem;

  .village {
    @apply max-w-6xl;
    width: 100%;
    text-align: center;

    .logo {
      @apply w-full mx-auto;
      max-width: 15rem;
      height: cover;
      vertical-align: middle;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }

    h1 {
      @apply text-6xl mb-6;
      font-size: 2rem;
      font-weight: 600;
    }

    p {
      @apply text-base;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      font-weight: 400;
      letter-spacing: 1px;
    }

    @media screen and (max-width: 700px) {
      h1 {
        @apply text-2xl mb-3 w-full;
      }

      p {
        font-size: 1rem;
      }
    }
  }
}
</style>

<template>
  <section>
    <h2>
      With the support of
    </h2>
    <div class="support">
      <a href="#">
        <img src="~assets/img/logo-totem.png" alt="">
      </a>
      <a href="#">
        <img src="~assets/img/hn.png" alt="">
      </a>
      <a href="#">
        <img src="~assets/svg/upv.svg" alt="">
      </a>
      <a href="">
        <img src="~assets/img/learning.png" alt="">
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

  .support {
    @apply w-full flex flex-row gap-16 px-4 mx-auto py-6;

    img {
      @apply w-full h-20;
    }
  }

  @media screen and (max-width: 768px) {
    .support {
      @apply flex-col mb-3;

      img {
        height: auto;
      }
    }
  }
}
</style>

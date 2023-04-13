<template>
  <section>
    <h2>
      With the support of
    </h2>
    <div class="support">
      <a id="totem-big" href="#">
        <img src="~assets/img/logo-totem.png" alt="">
      </a>
      <a href="#">
        <img src="~assets/img/hn.png" alt="">
      </a>
      <a id="totem-small" href="#">
        <img src="~assets/img/logo-totem.png" alt="">
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

<style lang="scss" scoped>
section {
  @apply max-w-7xl px-4 mx-auto;
  width: 100%;
  padding: 1rem;

  h2 {
    @apply text-4xl my-4;
  }

  .support {
    @apply w-full flex flex-row justify-between gap-8 px-4 mx-auto py-6 items-center;

    img {
      @apply  max-h-20;
    }
  }

  #totem-small {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .support {
      @apply flex-col mb-3;
      img {
        height: auto;
      }
    }
    #totem-small {
      display: block;
    }
    #totem-big {
      display: none;
    }
  }
}
</style>

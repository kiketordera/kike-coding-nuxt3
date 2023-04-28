<template>
  <section>
    <hr>
    <div class="scroll">
      <img src="~assets/svg/kk/html.svg" alt="">
      <img src="~assets/svg/kk/css.svg" alt="">
      <img src="~assets/svg/kk/go.svg" alt="">
      <img src="~assets/svg/kk/docker.svg" alt="">
      <img src="~assets/svg/kk/swift.svg" alt="">
      <img src="~assets/svg/kk/dart.svg" alt="">
      <img src="~assets/svg/kk/ts.svg" alt="">
      <img src="~assets/svg/kk/flutter.svg" alt="">
      <img src="~assets/svg/kk/java.svg" alt="">
      <img src="~assets/svg/kk/logo-vue.svg" alt="">
    </div>
    <hr>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
    @apply w-full;
    .scroll {
        @apply lg:max-w-6xl  snap-start flex mx-auto px-4
         snap-x snap-mandatory gap-16 overflow-y-hidden overflow-x-scroll my-5;
    }
    hr {
      @apply py-2;
      color: #CCCCCC;
    }
}

</style>

<template>
  <section>
    <div class="scroll">
      <img src="~assets/svg/html.svg" alt="">
      <img src="~assets/svg/css.svg" alt="">
      <img src="~assets/svg/go.svg" alt="">
      <img src="~assets/svg/docker.svg" alt="">
      <img src="~assets/svg/swift.svg" alt="">
      <img src="~assets/svg/dart.svg" alt="">
      <img src="~assets/svg/ts.svg" alt="">
      <img src="~assets/svg/flutter.svg" alt="">
      <img src="~assets/svg/java.svg" alt="">
      <img src="~assets/svg/logo-vue.svg" alt="">
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
    @apply w-full;
    .scroll {
        @apply lg:max-w-6xl  snap-start flex mx-auto px-4
         snap-x snap-mandatory gap-16 overflow-y-hidden overflow-x-scroll;
    }
}

</style>

<template>
  <div class="container">
    <img src="~/assets/img/everywhere-en.png" alt="" class="background-img">
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.container {
  .background-img {
    @apply max-w-full w-full bg-cover;
    margin: 0 auto;
    margin-top: 4rem;
    background-position: center;
    padding: 0rem 1rem;
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    .container {
      max-width: 1434px;
    }
  }
}
</style>

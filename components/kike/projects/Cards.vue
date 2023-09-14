<template>
  <section>
    <div class="skills">
      <div class="card">
        <div data-aos="zoom-in-left" class="card-body">
          <img src="~assets/img/kk/action-coast.png" alt="value villages">
          <NuxtLink to="/projects/value-villages/about">
            <button type="button">
              Value Village
            </button>
          </NuxtLink>
        </div>
        <!-- <div data-aos="zoom-up-right" class="card-body">
          <div class="gradient">
            <img src="~assets/img/kk/kikenya.png" alt="kikenya">
            <div class="logo">
              <img src="~assets/svg/kk/kikenya.svg" alt="">
            </div>
          </div>
          <NuxtLink to="/open">
            <button type="button">
              Kikenya Tours
            </button>
          </NuxtLink>
        </div> -->
        <div data-aos="zoom-up-down" class="card-body">
          <img src="~assets/img/kk/drones.png" alt="drones">
          <button type="button">
            Drones Project
          </button>
        </div>
        <div data-aos="zoom-in-right" class="card-body">
          <div class="gradient">
            <img src="~assets/img/kk/action-coast.png" alt="">
            <div class="logo">
              <img src="~assets/svg/kk/action-coast.svg" alt="">
            </div>
          </div>
          <button type="button">
            Action Coast
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
    @apply w-full mx-auto;
    .skills {
        @apply max-w-6xl w-full py-8 mx-auto px-4;
        .card {
          @apply grid lg:grid-cols-2 grid-cols-1 gap-4 my-4 w-full;
          .card-body {
            @apply w-full;
            .gradient {
              @apply w-full;
              color: black;
               background-size: cover;
               opacity: 0.9;
              .logo {
                @apply absolute inset-x-10 left-16 top-24 w-1/3 items-center justify-center px-4;
              }
            }
            img {
              @apply bg-cover w-full;
            }
            button {
                @apply lg:text-base text-sm uppercase px-16 py-4 text-center w-full;
                background-color: black;
                color: white;
                font-weight: 600;
            }
          }
        }
    }
}

</style>

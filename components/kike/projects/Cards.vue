<template>
  <section>
    <div class="skills">
      <div class="card">
        <div class="card-body">
          <img src="~assets/img/kk/action-coast.png" alt="">
          <NuxtLink to="http://localhost:3000/projects/value-villages/about">
            <button type="button">
              Value Village
            </button>
          </NuxtLink>
        </div>
        <div class="card-body">
          <img src="~assets/img/kk/kikenya-tours.png" alt="">
          <button type="button">
            Kikenya Tours
          </button>
        </div>
        <div class="card-body">
          <img src="~assets/img/kk/drones.png" alt="">
          <button type="button">
            Drones Project
          </button>
        </div>
        <div class="card-body">
          <img src="~assets/img/kk/action-coast.png" alt="">
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
    @apply w-full px-4 mx-auto;
    .skills {
        @apply max-w-6xl w-full py-8 mx-auto;
        .card {
          @apply grid lg:grid-cols-2 grid-cols-1 gap-4 my-4;
          .card-body {
            @apply w-full;
            img {
              @apply bg-cover w-full;
            }
            button {
                @apply lg:text-base text-sm uppercase px-16 py-4 text-center w-full;
                background-color: black;
                color: white;
                font-weight: 600;

                :active {
                  color: green;
                }
            }
          }
        }
    }
}

</style>

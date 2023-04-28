<template>
  <section>
    <div class="title">
      <span>Testimonials</span>
    </div>
    <div class="testimonies">
      <div class="card">
        <div class="card-body">
          <p>
            As part of the final project of my engineering studies, I was in Kenya teaching web design
            and programming in the rural area of Turkana. It was an unforgettable experience.
          </p>
          <div class="client">
            <img src="~assets/img/ipas.jpeg" alt="">
            <div class="info">
              <h2>Mercy Masika</h2>
              <span>Ceo-safaricom</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <p>
            As part of the final project of my engineering studies, I was in Kenya teaching web design
            and programming in the rural area of Turkana. It was an unforgettable experience.
          </p>
          <div class="client">
            <img src="~assets/img/ipas.jpeg" alt="">
            <div class="info">
              <h2>Mercy Masika</h2>
              <span>Ceo-safaricom</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <p>
            As part of the final project of my engineering studies, I was in Kenya teaching web design
            and programming in the rural area of Turkana. It was an unforgettable experience.
          </p>
          <div class="client">
            <img src="~assets/img/ipas.jpeg" alt="">
            <div class="info">
              <h2>Mercy Masika</h2>
              <span>Ceo-safaricom</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
    @apply w-full mx-auto px-4;
    .title {
    @apply text-left max-w-6xl lg:mx-auto px-4  lg:mb-5;
  span {
    @include title-section;
  }
}
    .testimonies {
        @apply max-w-6xl flex snap-x snap-mandatory gap-16 overflow-x-scroll mx-auto overflow-visible pt-8;
         .card {
            @apply w-full;
            color: white;
            background-color: black;
            .card-body {
                @apply min-w-[15rem] h-full lg:w-full snap-start gap-x-8 z-20 block px-3 py-2;
                color: white;
                background-color: black;
                p {
                    @apply text-base mb-3;
                    background-color: black;
                    color: white;
                }
                .client {
                @apply my-5 flex items-center gap-3 ;
                background-color: black;
                color: white;

                img {
                    @apply w-14 h-14 rounded-full;
                }
                .info {
                  @apply flex flex-col ;
                  color: white;
                  background-color: black;
                  h2 {
                    @apply uppercase;
                    color: white;
                    background-color: black;
                  }
                   span {
                    @apply uppercase;
                    background-color: black;
                    font-family: "Source Code Pro SemiBold";
                    &:last-of-type {
                             @apply text-sm;
                                  font-weight: 600;
                    }
                   }
                }
            }
            }
         }
    }
}

</style>

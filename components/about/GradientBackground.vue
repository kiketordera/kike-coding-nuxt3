<template>
  <section>
    <div class="gradient">
      <div class="info">
        <h2>
          Reinvent login
        </h2>
        <p>
          Extremely friendly user interface designed to integrate
          people who have the first contact with technology.The perfect starting!
        </p>
        <img src="~assets/img/log-in.png" alt="">
      </div>
      <div class="item">
        <img src="~assets/img/dashboard.png" alt="">
        <h2>Your Dashboard</h2>
        <p>
          Customizable dashboard with custom services, actions, and settings. All in 6 languages.
          Full set right out of the box!
        </p>
      </div>
      <div class="info dis">
        <h2>Beautiful… numbers?!</h2>
        <p>
          Visual representation of the performance, the cost, and the earnings, globally, locally and by a specific
          person.
          Also with numbers.
        </p>
        <img src="~assets/img/performance.png" alt="">
      </div>
      <div class="item dis">
        <img src="~assets/img/products.png" alt="">
        <h2>Watch, do, learn...</h2>
        <p>
          Empower the people with knowledge with custom video-courses for vocational training, education, personal
          hygiene....
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply w-full;
  background: linear-gradient(#6e81ff 0%, #35b9ff 33%,
      rgba(21, 174, 255, 0.83) 47.29%, #89ffc5 100%);
  color: white;
  text-align: center;
  max-width: 100%;
  margin: 0 auto;
  background-position: center;
  background-size: cover;
  padding: 0rem 0rem;

  .gradient {
    @apply flex flex-row justify-between gap-10 max-w-7xl mx-auto px-4;

    .info,
    .item {
      @apply min-h-full flex flex-col ;
      h2 {
        @apply text-2xl tracking-wider mt-6;
        font-weight: 600;
      }

      p {
        @apply text-base my-5 px-3;
      }
    }
    .item {
      @apply align-top;
    }

    .info {
      @apply justify-end;
    }

    .dis {
      display: inline;
      @media screen and (max-width: 790px) {
        display: none;
      }
    }
  }
}
</style>

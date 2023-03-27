<template>
  <section>
    <h2>Made with Love By</h2>
    <div class="team">
      <div class="cards">
        <div class="team-section">
          <span>Kike Tordera</span>
          <h3>Developer & UX / UI Designer</h3>
          <p>
            Kike is responsible for the whole software project. He first designed,
            and then coded the App from the initial concept until the final resu
          </p>
        </div>
        <div class="team-section">
          <span>Oskar Joziak</span>
          <h3>UX / UI Designer</h3>
          <p>
            Oskar has helped to design and prototype the interfaces of the App.
            He also presented the project to a competition obtaining the second prime.
          </p>
        </div>
        <div class="team-section">
          <span>Obadiah Ekiru</span>
          <h3>Graphic Designer</h3>
          <p>
            Ekiru made the whole stunning iconography, understanding and
            taking over with the different cultures to create a universal iconography.
          </p>
        </div>
        <div class="team-section">
          <span>Gabi Rocha</span>
          <h3>Graphic Designer</h3>
          <p>
            Gabi designed the amazing logo, and the astonishing brand identity,
            including the design style that is applied in every icon and that she supervised.
          </p>
        </div>
      </div>
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

  .team {
    @apply items-center;

    .cards {
      @apply gap-6 px-4 w-full py-12;
      display: flex;
      flex-direction: row;

      .team-section {
        @apply w-full;

        span {
          @apply text-3xl mb-4 tracking-wider;
          color: #00A3D2;
          white-space: nowrap;
          font-weight: 400;
        }

        h3 {
          @apply my-2 tracking-wider;
          color: #ED037C;
          white-space: nowrap;
        }

        p {
          @apply text-base w-full;
        }
      }
    }
  }
}
</style>

<template>
  <section>
    <h2>Made with Love By</h2>
    <div class="team">
      <div class="cards">
        <div v-for="team in allTeams" :key="team.id" class="team-section">
          <img :src="`/img/teams/${team.img}`" alt="">
          <span>{{ team.name }}</span>
          <h3>{{ team.title }}</h3>
          <p>
            {{ team.description }}
          </p>
          <div class="social-media">
            <a href="#">

              <img src="~assets/svg/linkedin.svg" alt="">
            </a>
            <a href="#">

              <img src="~assets/svg/web.svg" alt="">
            </a>
            <a href="#">

              <img src="~assets/svg/mail.svg" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const allTeams = APP.repository.getAllTeams()

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

        img {
          @apply rounded-full mx-auto w-28 h-28 my-4;
        }

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

      .social-media {
        @apply flex flex-row w-full max-w-4xl items-center gap-10 mx-8 py-3 px-4;

        a {
          img {
            @apply w-7 h-7;
          }
        }

      }
    }

    @media screen and (max-width: 768px) {
      .cards {
        @apply flex-col mb-3 px-4;
      }
    }
  }
}
</style>

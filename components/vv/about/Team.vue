<template>
  <section>
    <h2>Made with  <img src="~/assets/svg/vv/heart.svg" alt="" class="heart"> By</h2>
    <div class="team">
      <div class="cards">
        <div v-for="team in allTeams" :key="team.name" data-aos="zoom-out-up" class="team-section">
          <img :src="`/img/vv/teams/${team.img}`" alt="">
          <span>{{ team.name }}</span>
          <h3>{{ team.title }}</h3>
          <p>
            {{ team.description }}
          </p>
          <div class="social-media">
            <a :href="team.linkedin">
              <img src="~assets/svg/vv/linkedin.svg" alt="">
            </a>
            <a :href="team.web">
              <img src="~assets/svg/vv/web.svg" alt="">
            </a>
            <a :href="`mailto:${team.email}`">
              <img src="~assets/svg/vv/mail.svg" alt="">
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
  @apply max-w-7xl px-4 mx-auto;
  width: 100%;
  text-align: center;
  padding: 2rem 0rem;

  h2 {
    @apply text-4xl my-2;
  }

  .heart {
    margin-bottom: 10px;
    max-width: 30px;
    max-height: 30px;
    animation-name: pulse;
    animation-iteration-count: infinite;
    animation-duration: 2.5s;
    overflow: visible;
    display: inline;
}

  @keyframes pulse {
    0% {transform: scale(1);}
    25% {transform: scale(.97);}
    35% {transform: scale(.9);}
    45% {transform: scale(1.1);}
    55% {transform: scale(.9);}
    65% {transform: scale(1.1);}
    75% {transform: scale(1.03);}
    100% {transform: scale(1);}
  }

  .team {
    @apply items-center px-4;

    .cards {
      @apply gap-6 w-full py-6;
      display: flex;
      flex-direction: row;

      .team-section {
        @apply w-full ;

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
          @apply my-2 tracking-wider font-semibold;
          color: #ED037C;
          white-space: nowrap;
        }

        p {
          @apply text-base w-full text-justify max-w-md mx-auto;
        }
      }

      .social-media {
        @apply flex w-full mb-0 justify-center items-center gap-10 py-3 px-4;

        a {
          img {
            @apply w-7 h-7;
          }
        }

      }
    }

    @media screen and (max-width: 900px) {
      .cards {
        @apply flex-col mb-3 px-4;
      }
    }
  }
}
</style>

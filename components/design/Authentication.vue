<template>
  <section>
    <h1>
      Design beyond boundaries
    </h1>
    <div v-for="authenication in allAuthenication" :key="authenication.id" class="design">
      <div class="w-1/2">
        <img :src="`/img/boundaries/${authenication.img}`" alt="authenication" class="left-image">
      </div>
      <div class="content">
        <div class="title">
          <img src="~/assets/svg/lock-color.svg" alt="lock-img">
          <h2>
            {{ authenication.title }}
          </h2>
        </div>

        <div class="info">
          <p>
            {{ authenication.leftText }}
          </p>
          <p>
            {{ authenication.leftText }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const allAuthenication = APP.repository.getAllAuthenications()
</script>

<style lang="scss" scoped>
section {
  h1 {
    font-size: 2.4rem;
    margin-top: 3rem;
    margin-bottom: 4rem;
    text-align: center;
    letter-spacing: 4px;
    font-weight: 400;
  }

  @media screen and (min-width: 482px) and (max-width:768px) {
    h1 {
      font-size: 2rem;
      margin-top: 2.5rem;
      margin-bottom: 1.5rem;
    }
  }

  .design {
    margin: 0 auto;
    display: flex;
    max-width: 48rem;

    .left-image {
      height: 430px;
    }

    .content {

      .title {
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
        padding-left: 2rem;
        margin: 0 auto;
        padding-bottom: 0.5rem;
        align-items: center;

        img {
          padding-right: 1rem;
          height: 55px;

        }

        h2 {
          font-size: 2.5rem;
          text-align: start;
          font-weight: 500;

        }

        @media screen and (max-width: 768px) {
          h2 {
            @apply text-3xl mb-2;
            justify-content: center;
          }

          img {
            @apply w-10 h-auto;
          }
        }
      }

      .info {
        padding-top: 5px;
        padding-right: 35px;

        p {
          text-align: justify;
          padding-left: 2rem;
          font-size: 1rem;
          line-height: 1.7;
          padding-bottom: 12px;
          margin-bottom: 1rem;
          font-weight: 200;
          width: 100%;
          max-width: 56rem;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    .design {
      @apply flex flex-col-reverse px-4 w-full;

      .left-image {
        height: auto;
      }

      .info {
        width: 100%;
        padding-right: 0;

        p {
          width: 100%;
        }
      }

    }
  }

}
</style>

<template>
  <div class="container">
    <div class="design">
      <img src="~assets/img/design-dashboard.png" alt="authenication" class="right-image">
      <div class="content">
        <div class="title">
          <img src="~/assets/svg/dashboard.svg" alt="performace-img">
          <h2>
            Dashboard
          </h2>
        </div>

        <div class="info">
          <p>
            When you start to create an interface adapted for illiteracy,
            you need to take normal routines that you do several times every day and reinvent it,
            giving them a better understanding and simplicity.
          </p>
          <p>
            One of these daily routines is introducing a password.
            Instead of a password, they can remember a story with 4 animals,
            and the iconography of the animals in convention with their photo,
            the software is able to give to the user the security they need to use the system.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
  .design {
    @apply flex-row-reverse;
    margin: 0 auto;
    display: flex;
    max-width: 48rem;
    padding-top: 2rem;

    .right-image {
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
      @apply px-4;
      display: flex;
      flex-direction: column-reverse;
      width: 100%;

      .right-image {
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

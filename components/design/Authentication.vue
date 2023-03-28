<template>
  <section>
    <h1>
      Design beyond boundaries
    </h1>
    <div class="authentication">
      <img src="~assets/img/authenication.png" alt="authenication" class="auth-image">
      <div class="content">
        <div class="title">
          <img src="~/assets/svg/lock-color.svg" alt="lock-img">
          <h2>
            Authentications
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
    <img src="~/assets/img/everywhere-en.png" alt="" class="background-img">
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
section {
  font-family: 'Nunito', !important;
  padding: 0;
  margin: 0 auto;
  padding-top: 2.5rem;

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

  .authentication {
    margin: 0 auto;
    display: flex;
    max-width: 48rem;

    .auth-image {
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
    .authentication {
      @apply flex flex-col-reverse px-4 w-full;

      .auth-image {
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

  .background-img {
    max-width: 100%;
    margin: 0 auto;
    margin-top: 4rem;
    background-position: center;
    background-size: cover;
    padding: 0rem 1rem;
  }
}
</style>

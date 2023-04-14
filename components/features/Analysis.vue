<template>
  <section>
    <div class="system">
      <div class="title">
        <img src="~/assets/svg/vv/report.svg" alt="">
        <p>
          Easy <span>reports</span> , easy <span>analysis</span>
        </p>
      </div>
      <div class="info">
        <p>
          To take the right decision you must have the right information.
          The reports are usually misvalued, and often are not the priority of the organization,
          but it will be an important resource to answer a lot of questions and to prove the effectiveness of the
          program.
        </p>
        <p>
          The key to having good reports is to have the data, and this is normally a handicap,
          because maybe the recollection is not be done properly, or there is some data missing, or there is no
          recollection at all.
        </p>
        <p>
          But donors, who are the people who gives money to the organizations, do appreciate good reports,
          with good data to prove that their money is being invested successfully into the project.
        </p>
        <p>
          Having a digital solution, from the beginning of the chain to the end, dynamically
          created to cover the different characteristic of the NGO and the users of the communities,
          can be a fully equipped solution to the problem of tracking and reporting (and all the adds-on of the
          software system itself).
        </p>
      </div>
      <div class="box-img">
        <img src="~assets/img/vv/excel.png" alt="">
      </div>
      <div class="info">
        <p>
          The software provides you the ability to export into Excel files the data from the database, in specific
          documents to be able to export
          the data out of the system, make some calculations in base on the data obtained and analyze the data
          through
          Microsoft Excel.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 3rem 0rem;

  .system {
    margin-bottom: 2rem;
    font-weight: 400;

    .title {
      display: flex;
      justify-content: center;
      justify-items: center;
      padding-bottom: 1rem;
      align-items: center;

      img {
        height: 60px;
      }

      p {
        font-size: 2.4rem;
        text-align: center;
        padding-left: 1.5rem;
        font-weight: 900;

        span {
          color: #F7941D;
        }

      }

      @media screen and (max-width: 768px) {
        p {
          @apply text-xl mb-2;
        }

        img {
          @apply w-10 h-auto;
        }
      }
    }

    .info {
      margin: 0 auto;
      width: 100%;
      max-width: 48rem;
      padding: 0rem 2rem;

      p {
        align-items: center;
        text-align: justify;
        font-size: 20px;
        padding-bottom: 2rem;
        padding-top: 0.5rem;
        width: 95%;
      }

      @media screen and (max-width: 768px) {
        p {
          @apply text-base mb-2;
        }

      }
    }

    .box-img {
      margin: 0 auto;
      padding-top: 1rem;

      img {
        @apply w-10/12;
        height: auto;
        max-width: 100%;
        padding: 0rem 20rem;
      }

      @media screen and (max-width:700px) {
        img {
          @apply px-4 w-12 mx-auto;
          min-width: 25%;

        }
      }
    }

  }
}
</style>

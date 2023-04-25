<template>
  <section>
    <h2 data-aos="zoom-out-up">
      Technologies used to carry out the project
    </h2>
    <div data-aos="zoom-out-up" class="card">
      <div class="card-items">
        <h4 class="vue">
          Vue
        </h4>
        <p>
          This front-end framework is used to give some functionality to the interface without having to refresh
          the page: sorting
          tables by column, search information, and pagination.
        </p>
      </div>
      <div class="card-items">
        <h4 class="bootstrap">
          Bootstrap
        </h4>
        <p>
          Developed open-source by Twitter engineers, we use this Framework for the interface to be able to resize
          to the different screen sizes, from smartphone to desktop.
        </p>
      </div>

      <div class="card-items">
        <h4 class="gin">
          Gin gonic
        </h4>
        <p>
          This is a Web framework that use to speed up the development and
          improve the maintenance. It empowers the project with all the tools needed.
        </p>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
  max-width: 72rem;
  width: auto;
  margin: 0 auto;
  padding: 1rem 0rem;

  h2 {
    @apply font-bold px-4;
    font-size: 1.8rem;
    margin-top: 2rem;
  }

  .card {
    display: flex;
    flex-direction: row;
    gap: 3.6rem;
    padding: 1rem 1rem;

    .card-items {
      margin: 2rem 0rem;
      letter-spacing: 1px;

      h4 {
        font-size: 1.7rem;
        text-align: center;
        margin-bottom: 5px;
        font-weight: 600;

      }

      .vue {
        color: #41B883;

      }

      .bootstrap {
        color: #563E7D;
      }

      .gin {
        color: #D0AA00;
      }

      p {
        text-align: justify;
                max-width: 500px;
        margin: 0 auto;

      }
    }

  }

  @media screen and (max-width: 699px) {
    .card {
      flex-direction: column;
      margin-bottom: 1rem;
    }
  }
}
</style>

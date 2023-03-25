<template>
  <section>
    <h1>
      Design beyond boundaries
    </h1>
    <div class="authentication">
      <img src="~assets/img/authenication.png" alt="authenication" class="auth-image">
      <div class="content">
        <div class="title">
          <img src="~/assets/img/lock-color.svg" alt="lock-img">
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

    <!--   <div class="dashboard">
      <div class="class-one">
        <div class="image-para">
          <img src="~/assets/img/dashboard.svg" alt="dashboard-color">
          <p>
            Dashboard
          </p>
        </div>

        <div class="para-dashboard">
          <p>
            Having an understanding and clean menu is basic to create confidence in the use of the system.
            The main menu is a collection of icons labeled with a small description and divided into 3 categories:
          </p>
          <p class="dash-one">
            -Services: these are custom services that you can create depending on your necessities.
          </p>
          <p class="dash-one">
            -Actions: these are the global actions that you can make across all services that you create.
          </p>
          <p class="dash-one">
            -Logout: to close your session
          </p>
        </div>
      </div>

      <div class="design-image">
        <img src="~/assets/img/design-dashboard@2x.png" alt="design-dashboard">
      </div>
    </div>

    <div class="numerical">
      <img src="~/assets/img/design-num@2x.png" alt="design-numerical" class="img-numericals">

      <div class="numerals-all">
        <div class="numerals">
          <img src="~/assets/img/alphabet-color.svg" alt="">
          <p>
            Numerical Alphabet
          </p>
        </div>

        <div class="currency">
          <p>
            A numerical alphabet, like the roman but simplified,
            related to their currency to ensure that a person without the knowledge of the numbers will be
            able to understand how much money he/she needs to get paid.
          </p>
          <p>
            It can create any combination that the scope of the project can generate (covering all the money
            quantities)
            and is easily adaptable to any currency.
          </p>
        </div>
      </div>
    </div>

    <div class="perfomance">
      <div class="greta">
        <div class="perfomance">
          <img src="~/assets/img/performance-color.svg" alt="">
          <p>
            Perfomance
          </p>
        </div>

        <div class="greta-para">
          <p>
            Easily see the results of the production,
            controlling the money that is spent into payments to the workers and the money invested in the materials
            to make the products.
          </p>
          <p>
            You can see the data globally by all services, locally buy a specific service, or individually, by a
            specific worker in the system.
          </p>
          <p>
            All the views have the data in written words and numbers, in the graphic and numerical alphabet and with
            a chart for the representation.
          </p>
        </div>
      </div>
      <img src="~/assets/img/design-performance@2x.png" alt="" class="image-greta">
    </div>

    <div class="guided-courses">
      <img src="~/assets/img/design-video@2x.png" alt="" class="image-guided">

      <div class="div-vikapu">
        <div class="div-vikapu-para">
          <img src="~/assets/img/video-color.svg" alt="">
          <p>
            Guided Video Courses
          </p>
        </div>

        <div class="para">
          <p>
            Custom video tutorials, divided in steps for a guided and easy comprehension and with warnings about
            common mistakes to guide the process and avoid material waste.
          </p>
          <p>
            Also includes a set with icons and photos for a quick graphical resume of the tools and materials needed
            for the step.
          </p>
        </div>
      </div>
    </div>
    -->

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
        padding-left: 2rem;
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
          width: 80%;
        }
      }
    }
  }

  @media screen and (max-width:768px) {
    .authentication {
      margin: 0 1rem;

      .auth-image {
        padding-right: 15px;
        height: 400px;
      }

      .para {

        .content {

          img {
            height: 55px;
          }

          p {
            font-size: 30px;
          }
        }

        .info {

          p {
            padding-left: 1px;
            font-size: 15px;
          }
        }
      }
    }
  }

  /*
  .dashboard {
    display: flex;
    margin: 0 18rem;
    margin-top: 3rem;

    .class-one {
      .image-para {
        display: flex;

        img {
          height: 50px;
        }

        p {
          font-size: 2rem;
          text-align: justify;
          padding-left: 1rem;
        }
      }

    }

    .dashboard {
      text-align: justify;
      line-height: 1.7;
      font-size: 14px;
      padding-right: 2rem;

      p {
        padding-bottom: 10px;
      }

      .dash-one {
        padding-left: 20px;
      }
    }

    .design-image {
      img {
        height: 400px;
        padding-right: 3rem;
      }
    }
  }

  @media screen and (min-width: 200px) and (max-width: 550px) {
    .dashboard {
      margin: 3rem 10px;

      .class-one .image-para {

        img {
          height: 42px;
        }

        p {
          font-size: 23px;
        }
      }

      .dashboard {
        font-size: 12px;
        padding-right: 3px;

        p {
          padding-bottom: 10px;
          font-size: 14px;
        }

        .dash-one {
          padding-left: 5px;
        }
      }

      .design-image {
        margin-top: 4rem;

        img {
          height: 220px;
          padding-right: 5px;
        }
      }
    }
  }

  @media screen and (min-width: 482px) and (max-width:768px) {
    .dashboard {
      margin: 4rem 1.5rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    .dashboard {
      margin: 4rem 2rem;

      .class-one .para-dashboard p {
        font-size: 15px;
      }

      .design-image {
        img {
          height: 350px;
        }
      }
    }
  }

  .numerical {
    display: flex;
    margin-top: 3rem;
    margin-left: 20rem;
    margin-right: 20rem;

    img {
      height: 400px;
    }

    .numerals-all {
      padding-left: 2rem;
      //text-align: left;

      .numerals {
        display: flex;
        justify-content: flex-start;

        img {
          height: 50px;
        }

        p {
          font-size: 2rem;
          margin-bottom: 1rem;
          padding-left: 20px;
        }
      }

      .currency {

        p {
          font-size: 15px;
          text-align: justify;
          line-height: 1.7;
          padding-bottom: 1.5rem;
        }
      }
    }
  }

  @media screen and (min-width:200px) and (max-width:550px) {
    .numerical {
      margin: 0 11px;

      .img-numericals {
        height: 220px;
        margin-top: 3rem;
      }

      .numerals-all {
        padding-left: 5px;

        .numerals {

          img {
            height: 42px;
          }

          p {
            font-size: 23px;
            padding-left: 16px;
            margin-bottom: 0;
          }
        }

        .currency {
          padding-top: 1px;
          padding-right: 5px;

          p {
            font-size: 13px;
            padding-left: 1px;
          }
        }
      }
    }
  }

  @media screen and (min-width:551px) and (max-width:768px) {
    .numerical {
      margin: 4rem 2rem;

      img {
        padding-right: 15px;
        height: 400px;
      }

      .numerals-all {

        .numerals {

          img {
            height: 55px;
          }

          p {
            font-size: 30px;
          }
        }

        .currency {

          p {
            font-size: 15px;
            padding-left: 1px;
          }
        }
      }
    }
  }

  @media screen and (min-width:769px) and (max-width:1024px) {
    .numerical {
      margin: 0 4rem;

      img {
        padding-left: 1px;
      }

      .numerals-all {

        .numerals p {
          font-size: 23px;
          padding-left: 10px;
        }
      }

      .currency p {
        font-size: 15px;
        padding-left: 10px;
      }
    }
  }

  @media screen and (min-width:1025px) and (max-width:1200px) {
    .numerical {
      margin: 0 8rem;
    }
  }

  .perfomance {
    display: flex;
    margin-left: 20rem;
    margin-right: 20rem;
    margin-top: 3rem;

    .perfomance {
      display: flex;

      img {
        height: 60px;
      }

      p {
        font-size: 2rem;
        text-align: justify;
        padding-left: 2rem;
      }
    }

    .greta-para {
      p {
        text-align: justify;
        font-size: 14px;
        padding-right: 1.5rem;
        line-height: 1.7;
        padding-bottom: 1rem;
      }
    }

    img {
      height: 400px;

    }
  }

  @media screen and (min-width:200px) and (max-width:550px) {
    .perfomance {
      margin: 3rem 10px;

      .perfomance {

        img {
          height: 42px;
        }

        p {
          font-size: 23px;
        }
      }

      .greta-para {
        p {
          font-size: 13px;
          padding-right: 3px;
        }

      }

      .image-greta {
        height: 220px;
        padding-right: 5px;
        margin-top: 3rem;
      }
    }
  }

  @media screen and (min-width:551px) and (max-width:768px) {
    .perfomance {
      margin-right: 0;
      margin-left: 17px;
      margin-top: 4rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width:1200px) {
    .perfomance {
      margin-right: 4rem;
      margin-left: 4rem;
      margin-top: 4rem;

      .greta {
        img {
          height: 50px;
        }
      }
    }
  }

  .guided-courses {
    display: flex;
    margin-left: 21rem;
    margin-right: 21rem;
    margin-top: 4rem;

    img {
      height: 400px;
    }

    .div-vikapu {
      padding-left: 10px;

      .div-vikapu-para {
        display: flex;
        justify-content: flex-start;
        padding-left: 15px;

        img {
          height: 60px;
        }

        p {
          font-size: 2rem;
          padding-left: 14px;
        }
      }

      .para {
        padding-left: 1rem;

        p {
          text-align: justify;
          font-size: 15px;
          line-height: 1.7;
          padding-bottom: 2rem;
        }
      }
    }
  }

  @media screen and (min-width:200px) and (max-width:481px) {
    .guided-courses {
      margin: 3rem 11px;

      .image-guided {
        height: 220px;
        margin-top: 3rem;
      }

      .div-vikapu {
        padding-left: 5px;

        .div-vikapu-para {

          img {
            height: 42px;
          }

          p {
            font-size: 23px;
          }
        }

        .para {
          padding-top: 1px;
          padding-right: 5px;

          p {
            font-size: 14px;
          }
        }
      }
    }
  }

  @media screen and (min-width:482px) and (max-width:768px) {
    .guided-courses {
      margin: 0;

      img {
        height: 220px;
      }

      .div-vikapu {
        padding-left: 1px;

        .div-vikapu-para {

          img {
            height: 45px;
          }

          p {
            font-size: 23px;
          }
        }

        .para {

          p {
            font-size: 15px;
            //padding-left: 1px;
          }
        }
      }
    }
  }

  @media screen and (min-width:769px) and (max-width:1024px) {
    .guided-courses {
      margin: 3rem 4rem;

      img {
        padding-left: 1px;
      }

      .div-vikapu {
        .div-vikapu-para {
          p {
            font-size: 23px;
          }
        }

        .para {

          p {
            font-size: 15px;
            padding-left: 10px;
          }
        }
      }
    }
  }

  @media screen and (min-width:1025px) and (max-width:1200px) {
    .guided-courses {
      margin: 0 8rem;
    }
  }
 */

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

<template>
  <section>
    <div class="container">
      <h2>Design beyond boundaries</h2>
      <div class="btn btn-authentic">
        <h1>Authentic</h1>
        <img src="~assets/img/authenication.png" alt="authenication">
        <p class="one">
          When you start to create an interface adapted for illiteracy,
          you need to take normal routines that you do several times every day and reinvent it,
          giving them a better understanding and simplicity.
        </p>
        <p class="two">
          One of these daily routines is introducing a password.
          Instead of a password, they can remember a story with 4 animals,
          and the iconography of the animals in convention with their photo,
          the software is able to give to the user the security they need to use the system.
        </p>
      </div>

      <div class="btn btn-dashboard">
        <h1>Dashboard</h1>
        <p>
          Having an understanding and clean menu is basic to create confidence in the use of the system.
          The main menu is a collection of icons labeled with a small description and divided into 3 categories:
        </p>
        <p>
          -Services: these are custom services that you can create depending on your necessities.
          -Actions: these are the global actions that you can make across all services that you create.
          -Logout: to close your session
        </p>
      </div>

      <div class="btn btn-numerical-alphabet">
        <h1>Numerical-Alphabet</h1>
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

      <div class="btn btn-perfomance">
        <h1>Perfomance</h1>
        <p class="perf-one">
          Easily see the results of the production,
          controlling the money that is spent into payments to the workers and the money invested in the materials
          to make the products.
        </p>
        <p class="perf-two">
          You can see the data globally by all services, locally buy a specific service, or individually, by a
          specific worker in the system.
        </p>
        <p class="perf-three">
          All the views have the data in written words and numbers, in the graphic and numerical alphabet and with
          a chart for the representation.
        </p>
      </div>

      <div class="btn btn-guided-courses">
        <h1>Guided Video Courses</h1>
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
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.container {
    margin: 0 auto;
    background-color: aquamarine;

    & h2 {
        color: #dcdc25b3;
    }

    & .btn {
        margin: 10px 4rem;

        & .btn-authentic {
            color: green;
        }
    }
}
</style>

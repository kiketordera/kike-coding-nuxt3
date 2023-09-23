<template>
  <section>
    <div class="about">
      <h2 data-aos="fade-up">
        About
      </h2>
      <div class="info">
        <p data-aos="zoom-in-right">
          From the sun-kissed streets of Madrid to the bustling heart of Berlin, I had
          the oppootunity to have several international experiences in 3 continents, my journey has been nothing short of chill. 🌍
        </p>
        <p data-aos="zoom-in-right">
          From childhood, computers weren't just toys; they were puzzles waiting to be solved. I've been the computer guru
          since my playground days. 🖥️ But here's the kicker: <br>
          <span class="orange">
            I don't just code. I craft. Design, interface, experience - they're all part of my digital symphony.
          </span>
        </p>
        <p data-aos="zoom-in-right">
          Let's not just build. Let's innovate, design, and revolutionize.
          <br>
          <span class="blue">
            Why settle for ordinary when we can blend code and creativity to make something extraordinary?
          </span>
          <br>
          Let's collaborate and make digital magic! ✨
        </p>
        <br>
        <a data-aos="fade-down" href="/about">
          Read more
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  @apply w-full;

  .about {
    @apply max-w-6xl mx-auto lg:flex lg:flex-row flex-col py-36 w-full lg:mx-auto px-4;

    h2 {
      @include title-kike-section;
    }

    .info {
      @apply lg:w-3/4 w-full text-justify;

      p {
        @apply lg:text-lg my-5 items-start;
        span {
          &.blue{
            color: $sea-serpent;
          }
          &.orange{
            color: $light-salmon;
          }
        }
      }

      a {
        @include button-base;
        @apply mt-4;
        background-color: $font-color;
        color: $background-color;
        font-weight: 600;
      }
    }
  }
}
</style>

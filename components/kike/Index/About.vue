<template>
  <section>
    <div class="about">
      <h2>
        About
      </h2>
      <div class="info">
        <p>
          Kike Tordera, a skilled web developer based in Spain, has been creating innovative
          and engaging websites for [number] years. With a passion for
          coding and a keen eye for design, Kike Tordera is well-versed in a variety
          of programming languages, including HTML, CSS, JavaScript, and PHP.
        </p>
        <button type="button">
          Read more
        </button>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
    @apply w-full;
    .about {
        @apply max-w-6xl mx-auto lg:flex lg:flex-row flex-col py-40 w-full gap-36 lg:mx-auto px-4;

        h2 {
           @apply lg:text-4xl text-xl uppercase tracking-wider mb-4 w-1/2 my-8;
                font-family: "Source Code Pro Bold";
                font-weight: 600;
                color: #CCCCCC;
        }
        .info {
             @apply lg:w-3/4 w-full text-justify;
            p {
              @apply lg:text-lg  my-6 items-start;
            }
            button {
                @apply text-base uppercase px-16 py-4 my-5 text-center lg:w-auto w-full;
                background-color: $font-color;
                color: $background-color;
                font-weight: 600;
            }
        }
    }
}
</style>

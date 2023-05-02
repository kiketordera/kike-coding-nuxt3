<template>
  <section>
    <div class="skills">
      <h2>
        My Skills
      </h2>
      <div class="info">
        <p>
          Discover my range of skills and expertise in various areas.
        </p>
        <kike-about-Languages />
        <hr>
        <kike-about-Programming />
        <hr>
        <kike-about-SoftSkills />
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
    @apply w-full py-2 mx-auto px-4;
    .skills {
        @apply max-w-6xl flex gap-2 lg:flex-row flex-col mx-auto;
         h2 {
           @apply lg:text-4xl text-xl  tracking-wider mb-4 w-1/2 my-8;
                font-family: "Source Code Pro Bold";
                font-weight: 600;
                color: #CCCCCC;
        }
        .info {
             @apply lg:w-1/2 w-full text-justify;

            p {
              @apply lg:text-lg  my-6 items-start;
              color: #CCCCCC;
            }

            }
             hr {
        @apply my-4;
        border-color: #595959;
    }
        }
    }

</style>

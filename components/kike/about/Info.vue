<template>
  <section>
    <div class="about-us">
      <h2>
        About
      </h2>

      <div class="info">
        <p>
          Kike Tordera, a skilled web developer based in Spain, has been creating
          innovative and engaging websites for [number] years. With a passion for coding and a keen
          eye for design, Kike Tordera is well-versed in a variety of programming languages, including HTML, CSS, JavaScript, and PHP.
        </p>
        <div class="pdf">
          <img src="~assets/img/kk/kike.png" alt="">
          <button type="submit">
            <img src="~assets/svg/kk/resume.svg" alt="">
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
    @apply w-full py-40 mx-auto px-4;
    .about-us {
        @apply max-w-6xl flex gap-8 flex-row mx-auto;
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
                @apply text-base uppercase flex gap-3  py-4 my-5 text-center lg:w-auto w-full;
                color: $background-color;
                font-weight: 600;
            }
        }
    }
}

</style>

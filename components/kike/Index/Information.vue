<template>
  <section>
    <div class="info">
      <div class="content">
        <h2>
          <span>UX / UI Designer  & Software
            engineer </span>
        </h2>
        <p>
          Hi! I'm Kike Tordera.
        </p>
        <p>
          Born and raised in Madrid, Spain, and currently reside in Berlin, Germany.
        </p>
        <p>
          I have a solid base in programming thanks to my studies and international experience.
          Since very young I've always been learning and fixing computers.
        </p>
        <p>
          I think the design and interface part is as important as the code, and I think the whole is much greater than the sum of the parts.
        </p>
        <button type="button">
          Hire me
        </button>
      </div>
      <kike-Index-ProfileImage />
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
section {
   @apply w-full;
    .info {
        @apply py-28  max-w-6xl lg:mx-auto w-full lg:flex grid-cols-1 gap-8 px-4;
        .content {
            @apply lg:w-1/2 w-full px-4 mt-16 ;
            h2 {
               @apply lg:text-4xl text-xl uppercase tracking-wider mb-4;
                font-family: "Source Code Pro Bold";
                color: $font-color;
                font-weight: 600;
                span {
                    color: $title-color;
                }
            }
            p {
                @apply text-base pb-4 w-full text-justify;
                font-family: "Source Code Pro Regular";
            }
            button {
                @apply text-base uppercase px-16 py-4 my-5 text-center lg:w-auto w-full;
                background-color: $button-color;
                color: $background-color;
                font-weight: 600;
            }
        }
    }
}

</style>

<template>
  <section>
    <div class="info">
      <div class="content">
        <h2 class="mb-0" data-aos="zoom-in-up">
          <span>{</span>
          UX/UI Engineeer & Software developer
          <span>}</span>
        </h2>
        <h2>
          <span data-aos="fade-right" class="text-base">
            Engineered Precision. Designed Passion.
          </span>
        </h2>
        <p data-aos="fade-right">
          Specialist in interfaces, from the UX & design to the development & launch.
        </p>
        <p class="txt-blue" data-aos="fade-right">
          Why choose someone with half the skills? Take someone with the full package!
        </p>
        <button data-aos="zoom-in-down" type="button">
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
        @apply pt-28  max-w-6xl lg:mx-auto w-full lg:flex grid-cols-1 gap-8 px-4;
        .content {
            @apply lg:w-1/2 w-full mt-16;
            h2 {
               @apply lg:text-4xl text-xl uppercase  tracking-wider mb-4;
                font-family: "Source Code Pro Bold";
                color: $font-color;
                font-weight: 600;
                span {
                    color: $title-color;
                }
            }
            p {
                @apply text-base pb-3 w-full text-justify;
                font-family: "Source Code Pro Regular";
            }
            button {
                @include button-base;
                background-color: $button-color;
                color: $background-color;
                font-weight: 600;
            }
        }
    }
}

</style>

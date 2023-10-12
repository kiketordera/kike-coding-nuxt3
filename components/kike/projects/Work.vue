<template>
  <section>
    <div id="work" class="information" style="padding-top: 80px; margin-top: -80px;">
      <div class="intro">
        <h2 data-aos="fade-up">
          Projects
        </h2>
        <p data-aos="zoom=in-right">
          Check out my featured projects!
        </p>
      </div>
    </div>
    <kike-projects-Cards />
  </section>
</template>

<style lang="scss" scoped>
section {
    @apply w-full mx-auto pb-14;
    .information {
       @apply max-w-6xl w-full mx-auto  px-4;
      .intro {
        @apply mx-auto lg:flex lg:flex-row flex-col lg:py-10 py-4 gap-36 items-center;
         h2 {
          @include title-kike-section;
        }
      }
    }
}
</style>

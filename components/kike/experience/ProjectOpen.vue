<template>
  <section>
    <div class="main">
      <h2 data-aos="fade-up">
        Oculid
      </h2>
      <hr>
      <div class="overview">
        <div class="items">
          <span data-aos="zoom-in-up">Service</span>
          <p data-aos="zoom-in-right">
            Web Development
          </p>
        </div>
        <div class="items">
          <span data-aos="zoom-in-up">Timeline</span>
          <p data-aos="zoom-in-right">
            4 Months
          </p>
        </div>
        <div class="items">
          <span data-aos="zoom-in-up">Tools</span>
          <p data-aos="zoom-in-right">
            Full Stack
          </p>
        </div>
        <div class="items">
          <span data-aos="zoom-in-up">Year</span>
          <p data-aos="zoom-in-right">
            2019
          </p>
        </div>
        <div class="items">
          <span data-aos="zoom-in-up">Live site</span>
          <p data-aos="zoom-in-right">
            www.oculid.eu
          </p>
        </div>
      </div>
      <img src="~assets/img/kk/rectangle.png" alt="">
      <kike-experience-Information />
      <kike-experience-ImageSection />
      <kike-experience-Info />
      <kike-experience-ImageSection2 />
      <hr>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
section {
    @apply w-full py-24 mx-auto px-4;
    background-color: #131212;
     color: #595959;
     scroll-snap-type: y mandatory;
    .main {
        @apply max-w-6xl mx-auto px-4 items-center text-justify;
        h2 {
            @apply text-2xl lg:text-5xl my-10;
            color: $h2-color;
            font-family: $source-code-bold;
            font-weight: 600;
        }
        .overview {
            @apply flex lg:flex-row flex-col lg:gap-32 py-8;
            .items {
                @apply px-4 mb-5;
                span {
                    @apply text-base uppercase mb-8;
                    color: $button-color;
                }
                p {
                    @apply text-sm mt-3 text-justify;
                }
            }
        }
        .project {
            @apply flex flex-col justify-center w-full items-center;
            p {
                @apply lg:p-16 my-4 text-justify lg:w-11/12;
            }
        }
    .content {
    @apply py-12 justify-around gap-8 flex w-full;
  }
  hr {
    border-color: #595959;
  }

    }
}

</style>

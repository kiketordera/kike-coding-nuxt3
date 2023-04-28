<template>
  <section>
    <div class="intro mx-auto mb-16 w-full max-w-6xl">
      <h2>My Experience</h2>
      <p>
        Explore my professional journey and expertise through my comprehensive work experience section
      </p>
    </div>
    <ol
      class="timeline"
    >
      <li>
        <div class="items flex  items-center pt-2 md:block md:pt-0" />
      </li>
      <!--First item-->
      <li>
        <div class="items flex items-center pt-2 md:block md:pt-0">
          <div
            class="line"
          />
        </div>
        <div class=" info">
          <h2>
            Senior Mobile Developer
          </h2>
          <h4>Circus, 2020</h4>
          <span>Berlin, Germany</span>
          <p>
            I developed a native app that, through Machine Learning algorithms,
            is able to follow the user's glance to make heat-maps
            and make UX/UI research based on real data to be able to make user
            research at a fraction of the cost that using traditional approaches.
          </p>
        </div>
      </li>

      <!--Second item-->
      <li>
        <div class="items flex items-center pt-2 md:block md:pt-0">
          <div
            class="line"
          />
        </div>
        <div class="info">
          <h2>
            Senior Full stack Developer
          </h2>
          <h4>The Totem Studio,2022 - Present</h4>
          <span>Berlin, Alemonia</span>
          <p>
            I am currently working as the head of software engineering and interface design. Mainly full stack programmer
            in web App development, and also design and development of the interfaces, animations and delivery of technical projects.
          </p>
        </div>
      </li>

      <!--Third item-->
      <li>
        <div class="items flex-start flex items-center pt-2 md:block md:pt-0">
          <div
            class="line"
          />
        </div>
        <div class=" info">
          <h2>
            Senior Mobile Developer
          </h2>
          <h4>Circus, 2020</h4>
          <span>Berlin, Germany</span>
          <p>
            I am currently working as the head of software engineering and interface design. Mainly full stack programmer
            in web App development, and also design and development of the interfaces, animations and delivery of technical projects.
          </p>
        </div>
      </li>
    </ol>
    <div class="buttons">
      <a href="#">
        <img src="~assets/svg/left-arrow.svg" alt="">

      </a>
      <a href="#">
        <img src="~assets/svg/grey-arrow.svg" alt="">
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
section {
    @apply w-full mx-auto px-4 pb-12;
     .intro {
        @apply mx-auto lg:flex lg:flex-row flex-col lg:py-20 py-4 gap-36 px-4;
         h2 {
          @apply lg:text-4xl text-2xl uppercase tracking-wider mb-4 w-1/2;
                  font-family: "Source Code Pro SemiBold";
                  font-weight: 600;
          }
      }
    .timeline {
        @apply max-w-6xl mx-auto w-full border-l   md:flex justify-center md:gap-6 md:border-l-0 md:border-t;
        border-color: #595959;
        .items {
            @apply items-start flex pt-2 md:block md:pt-0 w-full;
            .line {
                @apply -ml-[10px] mr-3 h-[15px] w-[15px] rounded-full bg-white md:mx-0 md:-mt-[14px];
                background-color: $title-color;
            }
        }
        .info {
            @apply ml-4 mt-2 py-5 md:ml-0;
            h2 {
                @apply mb-1.5 text-base uppercase;
                font-family: "Source Code Pro Bold";
                color: $title-color;
            }
            h4 {
                @apply text-sm my-3;
                font-style: italic;
                font-family: "Source Code Pro Bold";
                color: $font-color;
            }
            span {
                @apply text-sm mb-4;
                font-style: italic;
            }
            p {
               @apply text-sm py-6;
            }
        }
    }
    .buttons {
      @apply flex justify-center gap-8 items-center  mx-auto py-10;
    }
}
</style>

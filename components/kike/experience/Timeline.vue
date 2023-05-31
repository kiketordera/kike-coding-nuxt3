<template>
  <section>
    <div class="intro">
      <h2 data-aos="fade-up">
        My Experience
      </h2>
      <p data-aos="zoom-in-right">
        Explore my professional journey and expertise through my comprehensive work experience section
      </p>
    </div>
    <div data-aos="zoom-up-down" class="title">
      <span class="work">Work</span>
      <span class="educate">
        Education
      </span>
      <span class="volunter">
        Volunteering
      </span>
    </div>
    <div class="scrolling">
      <ol
        class="timeline"
        data-aos="zoom-in-down"
      >
        <li>
          <div class="items" />
        </li>
        <div class="card-body">
          <div class="items">
            <div
              class="line"
            />
          </div>
          <div class=" info">
            <h2>
              Senior Mobile Developer
            </h2>
            <h4>Circus</h4>
            <span>Berlin, Germany</span>
            <p>
              I developed a native app that, through Machine Learning algorithms,
              is able to follow the user's glance to make heat-maps
              and make UX/UI research based on real data to be able to make user
              research at a fraction of the cost that using traditional approaches.
            </p>
          </div>
        </div>
        <div class="card-body">
          <div class="items">
            <div
              class="line"
            />
          </div>
          <div class="info">
            <h2>
              Senior Full stack Developer
            </h2>
            <h4>The Totem Studio</h4>
            <span>Berlin, Alemonia</span>
            <p>
              I am currently working as the head of software engineering and interface design. Mainly full stack programmer
              in web App development, and also design and development of the interfaces, animations and delivery of technical projects.
            </p>
          </div>
        </div>
        <div class="card-body">
          <div class="items">
            <div
              class="line"
            />
          </div>
          <div class=" info">
            <h2>
              Senior Mobile Developer
            </h2>
            <h4>Circus</h4>
            <span>Berlin, Germany</span>
            <p>
              I am currently working as the head of software engineering and interface design. Mainly full stack programmer
              in web App development, and also design and development of the interfaces, animations and delivery of technical projects.
            </p>
          </div>
        </div>
        <li>
          <div class="items" />
        </li>
        <div class="card-body">
          <div class="items">
            <div
              class="line"
            />
          </div>
          <div class=" info">
            <h2>
              Senior Mobile Developer
            </h2>
            <h4>Circus</h4>
            <span>Berlin, Germany</span>
            <p>
              I developed a native app that, through Machine Learning algorithms,
              is able to follow the user's glance to make heat-maps
              and make UX/UI research based on real data to be able to make user
              research at a fraction of the cost that using traditional approaches.
            </p>
          </div>
        </div>
        <div class="card-body">
          <div class="items">
            <div
              class="line"
            />
          </div>
          <div class="info">
            <h2>
              Senior Full stack Developer
            </h2>
            <h4>The Totem Studio</h4>
            <span>Berlin, Alemonia</span>
            <p>
              I am currently working as the head of software engineering and interface design. Mainly full stack programmer
              in web App development, and also design and development of the interfaces, animations and delivery of technical projects.
            </p>
          </div>
        </div>
        <div class="card-body">
          <div class="items">
            <div
              class="line"
            />
          </div>
          <div class="info">
            <h2>
              Senior Mobile Developer
            </h2>
            <h4>Circus</h4>
            <span>Berlin, Germany</span>
            <p>
              I am currently working as the head of software engineering and interface design. Mainly full stack programmer
              in web App development, and also design and development of the interfaces, animations and delivery of technical projects.
            </p>
          </div>
        </div>
      </ol>
    </div>
    <div class="buttons">
      <a href="#">
        <img src="~assets/svg/kk/left-arrow.svg" alt="">

      </a>
      <a href="#">
        <img src="~assets/svg/kk/grey-arrow.svg" alt="">
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
        @apply lg:mx-auto lg:flex lg:flex-row flex-col lg:py-20 py-4 gap-36 mb-2 w-full max-w-6xl;
         h2 {
          @apply lg:text-4xl text-2xl uppercase tracking-wider mb-5;
                  font-family: "Source Code Pro SemiBold";
                  font-weight: 600;
                  color: $h2-color;
          }
          p {
            @apply text-base w-full;
          }
      }
      .title {
        @apply mx-auto md:flex flex-row gap-16 max-w-6xl justify-center items-center lg:gap-8 py-12 px-4;
        span {
          @apply text-sm lg:text-base md:px-8;
          border-color: #59595970;
          &.work , &.educate {
            @apply lg:border-r;
          }
          &.work {
            color: $node-color;
          }
          &.educate {
            color: $button-color;
          }
          &.volunter {
            color: $font-color;
          }
        }
      }
      .scrolling {
         @apply max-w-6xl w-full lg:mb-4 mb-1 mx-auto lg:snap-x lg:gap-3 md:snap-mandatory lg:overflow-x-scroll overflow-y-hidden;
        .timeline {
          @apply border-l md:flex flex-row justify-center md:gap-4 md:border-l-0 md:border-t;
            border-color: 1px solid $background-color;
            .card-body {
               @apply min-w-[20rem] snap-center p-0 mx-auto relative;
               .items {
                   @apply flex md:block md:pt-0 w-full;
                   .line {
                       @apply -ml-[10px] mr-3 h-[15px] w-[15px] rounded-full md:mx-0 md:-mt-[6px];
                       background-color: $title-color;
                   }
               }
            }
            .info {
                @apply ml-4 md:ml-0;
                h2 {
                    @apply mb-1.5 text-base uppercase;
                    font-family: "Source Code Pro Bold";
                    color: $title-color;
                }
                h4 {
                    @apply text-sm my-3;
                    font-style: italic;
                    font-family: "Source Code Pro Bold";
                     color: $title-color;
                }
                span {
                    @apply text-sm mb-4;
                    font-style: italic;
                }
                p {
                   @apply text-sm py-6 text-justify;
                }
            }
        }
      }
    .buttons {
      @apply flex justify-center gap-8 items-center  mx-auto py-10;
    }
}
</style>

<template>
  <section>
    <div class="info">
      <div class="content">
        <h2 class="mb-0">
          <span>{</span>
          UX/UI Engineeer & <span class="yellow"> Software developer</span>
          <span>}</span>
        </h2>
        <h2>
          <span class="text-base">
            Engineered Precision. Designed Passion.
          </span>
        </h2>
        <p>
          Specialist in interfaces, from the UX & design to the development & launch.
        </p>
        <p class="txt-blue">
          Why choose someone with half the skills? Take someone with the full package!
        </p>
        <NuxtLink to="/#contact">
          Hire me
        </NuxtLink>
      </div>
      <kike-Index-ProfileImage />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
   @apply w-full;
    .info {
        @apply pt-28  max-w-6xl lg:mx-auto w-full lg:flex grid-cols-1 gap-8 px-4;
        .content {
            @apply lg:w-1/2 w-full mt-16;
            h2 {
               @apply lg:text-4xl text-xl uppercase  tracking-wider mb-4;
                font-family: $source-code-bold;
                color: $font-color;
                font-weight: 600;
                span {
                    color: $title-color;
                    &.yellow {
                      color: $cyber-yellow;
                    }
                }
            }
            p {
                @apply text-base pb-3 w-full text-justify;
                font-family: $source-code-regular;
            }
            .txt-blue {
              @apply mb-3;
            }
            a {
                @include button-base;
                background-color: $button-color;
                color: $background-color;
                font-weight: 600;
            }
        }
    }
}

</style>

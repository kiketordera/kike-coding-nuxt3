<template>
  <section>
    <div class="main">
      <h2>Value Villages</h2>
      <div class="overview">
        <div class="items">
          <span>Project Overview</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="items">
          <span>Timeline</span>
          <p>
            4 Months
          </p>
        </div>
        <div class="items">
          <span>Tools</span>
          <p>
            Full Stack
          </p>
        </div>
        <div class="items">
          <span>Year</span>
          <p>
            2019
          </p>
        </div>
      </div>
      <div class="project">
        <img src="~assets/img/kk/rectangle.png" alt="">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u
          llamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src="~assets/img/kk/rectangle.png" alt="">
      </div>
      <div class="content">
        <NuxtLink to="[getPrev()]">
          <img class="rotate-180 pl-8" src="~assets/svg/kk/arrow-next.svg" alt="">
        </NuxtLink>
        <NuxtLink to="/#work">
          <img class="float-center" src="~assets/svg/kk/pramid.svg" alt="">
        </NuxtLink>
        <NuxtLink to="[getNext()]">
          <img class="pl-8" src="~assets/svg/kk/arrow-next.svg" alt="">
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getNext (): number {
  if (props.index === 3) {
    return 0
  }
  return props.index! + 1
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrev (): number {
  if (props.index === 0) {
    return 3
  }
  return props.index! - 1
}

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
            @apply text-2xl lg:text-5xl my-4;
            color: #CCCCCC;
            font-family: "Source Code Pro Bold";
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

    }
}

</style>

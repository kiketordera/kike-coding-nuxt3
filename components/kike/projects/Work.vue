<template>
  <section>
    <div class="information">
      <div class="intro">
        <h2>Works</h2>
        <p>
          Check out my latest project and discover how it revolutionizes the way we approach
        </p>
      </div>
      <div class="languages">
        <span>
          HTML
        </span>
        <span>
          css
        </span>
        <span>
          Javascript
        </span>
        <span>
          Typescript
        </span>
        <span>
          Angular
        </span>
        <span>
          Vue.js
        </span>
        <span>
          Jguery
        </span>
        <span>
          Bootstrap
        </span>
        <span>
          Node.js
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
section {
    @apply w-full px-4;
    .information {
       @apply max-w-6xl w-full mx-auto;
      .intro {
        @apply mx-auto lg:flex lg:flex-row flex-col lg:py-10 py-4 gap-36 ;
         h2 {
          @apply lg:text-5xl text-2xl uppercase tracking-wider mb-4 w-1/2;
                  font-family: "Source Code Pro SemiBold";
                  font-weight: 600;
                  color: #CCCCCC;
          }
      }
      .languages {
        @apply py-8 lg:flex w-full lg:flex-row grid grid-cols-3 gap-4 items-center;
        span {
            @apply border-r text-sm  lg:text-base lg:px-4;
            border-color: #59595970;
        }
      }
      .skills {
        @apply py-8 w-full;
        .card {
          @apply grid grid-cols-2 gap-5 my-4;
        }
      }
    }

}

</style>

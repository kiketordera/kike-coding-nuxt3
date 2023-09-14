<template>
  <section>
    <div id="about" class="information">
      <div class="intro">
        <h2 data-aos="fade-up">
          Works
        </h2>
        <p data-aos="zoom=in-right">
          Check out my latest project and discover how it revolutionizes the way we approach
        </p>
      </div>
      <div data-aos="zoon-up-down" class="languages">
        <span class="html">
          HTML
        </span>
        <span class="css">
          css
        </span>
        <span class="javascript">
          Javascript
        </span>
        <span class="typescript">
          Typescript
        </span>
        <span class="angular">
          Angular
        </span>
        <span class="vue">
          Vue.js
        </span>
        <span class="jquery">
          Jguery
        </span>
        <span class="boostrap">
          Bootstrap
        </span>
        <span class="node">
          Node.js
        </span>
      </div>
    </div>
    <kike-projects-Cards2 />
  </section>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
section {
    @apply w-full mx-auto;
    .information {
       @apply max-w-6xl w-full mx-auto  px-4;
      .intro {
        @apply mx-auto lg:flex lg:flex-row flex-col lg:py-10 py-4 gap-36 ;
         h2 {
          @apply lg:text-5xl text-3xl uppercase tracking-wider mb-4 w-1/2;
                  font-family: "Source Code Pro SemiBold";
                  font-weight: 600;
                  color: #CCCCCC;
          }
      }
      .languages {
        @apply py-8 lg:flex w-full lg:flex-row grid md:grid-cols-6 grid-cols-3 gap-4 items-center;
        span {
            @apply border-r text-sm  lg:text-base lg:px-4;
            border-color: #59595970;
        }
        .html {
          color: $html-color;
        }
        .css {
          color: $css-color;
        }
        .javascript {
          color: $button-color;
        }
        .typescript{
          color: $html-color;
        }
        .angular {
          color: $angular-color;
        }
        .vue {
          color: $vue-color;
        }
        .jquery {
          color: $jquery-color;
        }
        .boostrap {
          color: $boostrap-color;
        }
        .node {
          color: $node-color;
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

<template>
  <div class="program">
    <h3 data-aos="fade-up">
      Education Background
    </h3>
    <div class="edu">
      <div class="left">
        <img src="/svg/kk/upv.svg" alt="">
        <p>2012-2016</p>
        <p class="duration">
          4 years
        </p>
      </div>
      <div class="right">
        <p class="title">
          Polytechnic University of Valencia
        </p>
        <p class="subtitle">
          Bachelor's degree in Computer Science
        </p>
        <p class="description">
          Activities and societies: Responsible delegate of international exchange internship association IAESTE
          in the computer department of Polytechnic University
        </p>
      </div>
    </div>
    <div class="edu">
      <div class="left">
        <img src="/svg/kk/czech.svg" alt="">
        <p>2016-2017</p>
        <p class="duration">
          1 year
        </p>
      </div>
      <div class="right">
        <p class="title">
          Czech Technical University in Prague
        </p>
        <p class="subtitle">
          Specialization in Software Engineering
        </p>
        <p class="description">
          Activities and societies: Volunteer in the IAESTE association for exchange students internship
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.program {
  @apply py-4 w-full;

  h3 {
    @apply lg:text-4xl text-xl tracking-wider mb-6 my-8;
    font-family: $source-code-bold;
    color: $title-color;
  }

    .edu {
      @apply flex gap-8 mt-8;
      .left {
        @apply text-center;
        img {
          @apply max-w-[60rem] max-h-[5rem] mx-auto;
        }
        p {
          @apply whitespace-nowrap mt-4;
          color: $h2-color;
        }
        .duration {
          @apply text-sm font-bold mt-1.5 text-base;
          color: white;
        }
      }
      .right {
        @apply -mt-1;
        p.title {
          @apply text-2xl font-bold -mt-1;
          color: $light-salmon;
          font-family: $source-code-bold;
        }
        p.subtitle {
          @apply font-bold text-lg;
          font-family: $source-code-semibold;
          color: $cyber-yellow;
        }
        p.description {
          @apply mt-2;
          color: $h2-color;
        }
      }
    }
  }
</style>

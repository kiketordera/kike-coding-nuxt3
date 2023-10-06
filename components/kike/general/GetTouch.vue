<template>
  <div id="contact">
    <div class="details">
      <h2 data-aos="zoom-in-left">
        <a :href="`mailto:${ContactInformation.email}`">
          Get in touch
        </a>
      </h2>
      <img data-aos="zoom-right" src="~assets/svg/kk/right-arrow.svg" alt="">
    </div>
    <hr>
  </div>
</template>

<script setup lang="ts">
import { ContactInformation } from '~/data_helper/contact'
</script>

<style lang="scss" scoped>
    .details {
      @apply flex lg:gap-3 items-center gap-4 justify-center py-8;
      background-color: black;
      h2 {
        @apply text-center lg:text-9xl md:text-4xl font-extrabold text-2xl uppercase tracking-wide;
        font-family: $source-code-semibold;
        color: white;
        background-color: black;
      }
      img {
        @apply lg:w-auto w-4;
        color: white;
        background-color: black;
      }
    }
    hr {
      @apply py-[0.2rem] mt-3;
    }
</style>

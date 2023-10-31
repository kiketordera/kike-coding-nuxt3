<template>
  <section>
    <div class="info">
      <div class="content">
        <h2 class="mb-0" data-aos="zoom-in-up">
          <span>{</span>
          UX/UI Engineer & <span class="yellow"> Software developer</span>
          <span class="ml-3 sm:ml-8">}</span>
        </h2>
        <h2>
          <span data-aos="fade-right" class="text-base">
            Engineered Precision. Designed Passion.
          </span>
        </h2>
        <p data-aos="fade-right">
          I specialize in interfaces, from UX & design to development & launch.
        </p>
        <p class="txt-blue" data-aos="fade-right">
          Why choose someone with half the skills? Take someone with the full package!
        </p>
        <a target="_blank" href="https://calendly.com/kiketordera" @click="whatsAppState.toggleModal()">
          Hire me
        </a>
      </div>
      <img src="~assets/img/kk/stricker.png" alt="" class="mx-auto">
    </div>
  </section>
</template>

<script lang="ts" setup>
import { WhatsAppStateProvider } from '~/store/whatsapp'

const whatsAppState = WhatsAppStateProvider()
</script>

<style lang="scss" scoped>
section {
   @apply w-full;
    .info {
        @apply pt-28 max-w-6xl lg:mx-auto w-full lg:flex grid-cols-1 gap-8 px-4 text-center lg:text-left;
        .content {
            @apply lg:w-1/2 w-full mt-16;
            h2 {
               @apply lg:text-4xl text-xl uppercase tracking-wider mb-4;
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
                @apply text-base pb-3 w-full lg:text-justify;
                font-family: $source-code-regular;
                color: $h2-color;
            }
            .txt-blue {
              @apply mb-3;
              color: $sea-serpent;
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

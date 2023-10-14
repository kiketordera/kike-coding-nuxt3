<template>
  <section>
    <div class="main">
      <h2 data-aos="fade-up">
        {{ props.client }}
      </h2>
      <hr>
      <div class="overview">
        <div class="items">
          <span data-aos="zoom-in-up">Services</span>
          <ul data-aos="zoom-in-right">
            <li v-for="ser in props.services" :key="ser">
              {{ ser }}
            </li>
          </ul>
        </div>
        <div class="items">
          <span data-aos="zoom-in-up">Tech</span>
          <ul data-aos="zoom-in-right">
            <li v-for="t in props.tech" :key="t">
              {{ t }}
            </li>
          </ul>
        </div>
        <div class="items">
          <span data-aos="zoom-in-up">Year</span>
          <p data-aos="zoom-in-right">
            {{ props.year }}
          </p>
        </div>
        <div class="items">
          <span data-aos="zoom-in-up">Web site</span> <br>
          <a target="_blank" :href="props.url">{{ props.url }}</a>
        </div>
      </div>
      <div :style="{ backgroundImage: `url(${props.coverImg})` }" class="bg" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const props = defineProps({
  client: {
    type: String,
    required: true,
  },
  services: {
    type: Array<string>,
    required: true,
  },
  tech: {
    type: Array<string>,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
   coverImg: {
    type: String,
    required: true,
  },
   url: {
    type: String,
    required: true,
  },
})

</script>

<style lang="scss" scoped>
section {
    @apply w-full py-24 mx-auto;
     color: #CCCCCC;
     scroll-snap-type: y mandatory;
    .main {
        @apply max-w-6xl mx-auto px-4 items-center text-justify;
        h2 {
            @apply text-2xl lg:text-5xl my-10 uppercase;
            color: $h2-color;
            font-family: $source-code-bold;
            font-weight: 600;
        }
        .overview {
            @apply grid grid-cols-2 sm:grid-cols-4 gap-4 flex-wrap py-8 justify-between;
            .items {
                @apply mb-5;
                span {
                    @apply text-base uppercase;
                    color: $button-color;
                }
                p {
                    @apply text-sm text-justify;
                }
                p,
                li,
                a {
                  @apply mt-1;
                }
            }
        }
        hr {
          border-color: #595959;
        }
        .bg {
          @apply w-full bg-cover bg-no-repeat h-[70vh];
          background-position: center;
        }
    }
}

</style>

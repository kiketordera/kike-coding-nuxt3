<template>
  <section>
    <div class="main">
      <h2 data-aos="fade-up">
        {{ props.client }}
      </h2>
      <hr>
      <div class="overview">
        <div class="items">
          <span data-aos="zoom-in-up">Service</span>
          <ul data-aos="zoom-in-right">
            <li v-for="ser in props.service" :key="ser">
              {{ ser }}
            </li>
          </ul>
        </div>
        <div class="items">
          <span data-aos="zoom-in-up">Timeline</span>
          <p data-aos="zoom-in-right">
            {{ props.duration }}
          </p>
        </div>
        <div class="items">
          <span data-aos="zoom-in-up">Tools</span>
          <p data-aos="zoom-in-right">
            Full Stack
          </p>
        </div>
        <div class="items">
          <span data-aos="zoom-in-up">Year</span>
          <p data-aos="zoom-in-right">
            {{ props.year }}
          </p>
        </div>
        <div class="items">
          <span data-aos="zoom-in-up">Live site</span>
          <p data-aos="zoom-in-right">
            {{ props.url }}
          </p>
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
  service: {
    type: Array<string>,
    required: true,
  },
  duration: {
    type: String,
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
            @apply text-2xl lg:text-5xl my-10;
            color: $h2-color;
            font-family: $source-code-bold;
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
  hr {
    border-color: #595959;
  }
  .bg {
    @apply w-full bg-cover bg-no-repeat h-[70vh] mt-4;
    background-position: center;
  }

    }
}

</style>

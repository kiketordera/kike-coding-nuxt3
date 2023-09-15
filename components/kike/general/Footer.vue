
<template>
  <footer>
    <div id="footer" class="contact">
      <div class="details">
        <h2 data-aos="zoom-in-left">
          Get in touch
        </h2>
        <img data-aos="zoom-right" src="~assets/svg/kk/right-arrow.svg" alt="">
      </div>
      <hr>
      <div class="social-media">
        <div data-aos="zoom-in-down" class="items">
          <ul>
            <li>
              <img src="~assets/svg/kk/linkedin.svg" alt="">
            </li>
            <li>
              <img src="~assets/svg/kk/github.svg" alt="">
            </li>
            <li>
              <img src="~assets/svg/kk/mail.svg" alt="">
            </li>
          </ul>
        </div>
        <div class="legal flex gap-8">
          <NuxtLink to="/legal/cookies-policy">
            Cookies
          </NuxtLink>
          <NuxtLink to="/legal/privacy-policy">
            Privacy
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
// const year = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
footer {
  @apply w-full mx-auto;
  background-color: black;
  .contact {
    @apply pt-20 pb-8 mx-auto max-w-6xl px-4;
    background-color: black;
    .details {
      @apply flex lg:gap-3 items-center gap-4 justify-center;
      background-color: black;
      h2 {
        @apply text-center lg:text-9xl md:text-4xl font-extrabold text-2xl uppercase tracking-wide;
        font-family: 'Source Code Pro SemiBold';
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
    .social-media {
      @apply mt-6 flex lg:flex-row flex-col justify-between items-center;
      font-weight: 600;

      .items {
        @apply text-xl uppercase mb-5;

        ul {
          @apply flex gap-8 mx-8;

          li {
            color: $button-color;

            img {
              @apply w-8 h-8;
            }
          }
        }
      }
    }
  }
  hr {
    @apply my-4;
    border-color: #595959;
  }
  .legal {
    color: #595959;
  }
}
</style>

<template>
  <footer>
    <div class="contact">
      <div class="social-media">
        <div class="items">
          <ul>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/kiketordera/">
                <img src="~assets/svg/kk/linkedin.svg" alt="" class="mx-auto">
              </a>
            </li>
            <!-- <li>
              <a target="_blank" href="https://github.com/kiketordera">
                <img src="~assets/svg/kk/github.svg" alt="">
              </a>
            </li> -->
            <li>
              <a :href="`mailto:${ContactInformation.email}`">
                <img src="~assets/svg/kk/mail.svg" alt="">
              </a>
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
import { ContactInformation } from '../../../data_helper/contact'

// const year = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
footer {
  @apply w-full mx-auto;
  background-color: black;
  .contact {
    @apply py-8 mx-auto max-w-6xl px-4;
    background-color: black;

    .social-media {
      @apply flex justify-between items-center;
      font-weight: 600;

      .items {
        @apply text-xl uppercase;

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

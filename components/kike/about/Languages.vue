<template>
  <div class="languages">
    <h3 data-aos="fade-up">
      Languages
    </h3>
    <div data-aos="zoom-in-down" class="expert">
      <div class="lang">
        <div>
          <img src="~assets/svg/kk/spanish.svg" alt="">
          <span>
            Spanish
          </span>
        </div>
        <p class="level">
          Native
        </p>
      </div>
      <div class="lang">
        <div>
          <img src="~assets/svg/kk/german-flag.svg" alt="">
          <span>
            German
          </span>
        </div>
        <p class="level">
          B1 - Level
        </p>
      </div>
      <div class="lang">
        <div>
          <img src="~assets/svg/kk/united-kingdom.svg" alt="">
          <span>
            English
          </span>
        </div>
        <p class="level">
          C1 - Level
        </p>
      </div>
      <div class="lang">
        <div>
          <img src="~assets/svg/kk/tanzania.svg" alt="">
          <span>
            Swahili
          </span>
        </div>
        <p class="level">
          B1 - Level
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.languages {
  @apply py-4 w-full;

  h3 {
    @apply lg:text-4xl text-xl tracking-wider mb-6 my-8;
    font-family: "Source Code Pro Bold";
    font-weight: 600;
    color: $font-color;
  }

  .expert {
    @apply flex flex-row flex-wrap items-center gap-10 mb-2;
    .lang {
          div {
            @apply flex items-center;
            img {
              @apply lg:w-6 lg:h-6 w-4 h-4 mr-2;
            }
            span {
              @apply text-base font-bold;
              color: $h2-color;
            }
          }
          p.level {
            @apply text-sm block mt-2 whitespace-nowrap;
            color: $h2-color;
          }
    }
  }
}
</style>

<template>
  <div class="languages">
    <h3>
      Languages
    </h3>
    <div class="expert">
      <img src="~assets/svg/kk/spanish.svg" alt="">
      <span>
        Spanish
      </span>
      <img src="~assets/svg/kk/german-flag.svg" alt="">
      <span>
        Germany
      </span>
      <img src="~assets/svg/kk/united-kingdom.svg" alt="">
      <span>
        English
      </span>
    </div>
    <div class="level">
      <span>
        Level-B1
      </span>
      <span>
        Level-B1
      </span>
      <span>
        Level-B1
      </span>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.languages {
    @apply py-4 w-full;

      h3 {
           @apply lg:text-4xl text-xl tracking-wider mb-6  my-8;
                font-family: "Source Code Pro Bold";
                font-weight: 600;
                color: $font-color;
            }
            .expert {
                @apply flex flex-row items-center lg:gap-4 gap-3 mb-2;
                img {
                  @apply lg:w-6 lg:h-6 w-4 h-4;
                }
                span {
                    @apply lg:text-base text-sm;
                    color: #CCCCCC;
                }
        }
        .level {
             @apply flex flex-row items-center  py-8 mb-2 lg:gap-12 gap-6 px-4;
                span {
                    @apply text-sm lg:text-base;
                    color: #CCCCCC;
                }
        }
}

</style>

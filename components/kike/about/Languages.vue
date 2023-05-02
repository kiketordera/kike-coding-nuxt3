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
      <img src="~assets/svg/kk/flag_germany.svg" alt="">
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
           @apply lg:text-4xl text-xl  tracking-wider mb-6  my-8;
                font-family: "Source Code Pro Bold";
                font-weight: 600;
                color: $font-color;
            }
            .expert {
                @apply flex flex-row items-center gap-4 mb-2;
                span {
                    @apply text-base;
                    color: #CCCCCC;
                }
        }
        .level {
             @apply flex flex-row items-center gap-20 py-8 mb-2 px-4;
                span {
                    @apply text-base;
                    color: #CCCCCC;
                }
        }
}

</style>

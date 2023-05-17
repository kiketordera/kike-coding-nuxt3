<template>
  <div class="program">
    <h3 data-aos="fade-up">
      Coding
    </h3>
    <div class="skills">
      <img data-aos="zoom-in-left" src="~assets/svg/kk/go-language.svg" alt="">
      <span data-aos="zoom-in-right">
        Golang
      </span>
      <img data-aos="zoom-in-left" src="~assets/svg/kk/swift-language.svg" alt="">
      <span data-aos="zoom-in-right">
        Swift
      </span>
      <img data-aos="zoom-in-left" src="~assets/svg/kk/html-language.svg" alt="">
      <span data-aos="zoom-in-right">
        html
      </span>
      <img data-aos="zoom-in-left" src="~assets/svg/kk/css-style.svg" alt="">
      <span data-aos="zoom-in-right">
        Css/Sass
      </span>
      <img data-aos="zoom-in-left" src="~assets/svg/kk/typescript-language.svg" alt="">
      <span data-aos="zoom-in-right">
        Typescript
      </span>
    </div>
    <p>
      Level-C2
    </p>
    <div class="skills">
      <img data-aos="zoom-in-left" src="~assets/svg/kk/dart-language.svg" alt="">
      <span data-aos="zoom-in-right">
        Dart
      </span>
      <img data-aos="zoom-in-left" src="~assets/svg/kk/flutter-language.svg" alt="">
      <span data-aos="zoom-in-right">
        Flutter
      </span>
      <img data-aos="zoom-in-left" src="~assets/svg/kk/java-language.svg" alt="">
      <span data-aos="zoom-in-right">
        JAVA
      </span>
      <img data-aos="zoom-in-left" src="~assets/svg/kk/vue-language.svg" alt="">
      <span data-aos="zoom-in-right">
        Vue
      </span>
    </div>
    <p>
      Level-B1
    </p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.program {
    @apply py-4 w-full;

      h3 {
           @apply lg:text-4xl text-xl  tracking-wider mb-6 w-1/2 my-8;
                font-family: "Source Code Pro Bold";
                font-weight: 600;
                color: $title-color;
            }
            .skills {
                @apply lg:flex lg:flex-row items-center grid grid-cols-6 lg:gap-3 gap-2 mb-4;
                img {
                  @apply ml-3 lg:ml-0 w-7 h-7;
                }
                span {
                    @apply lg:text-base text-sm ;
                    color: #CCCCCC;
                }
        }
        p {
             @apply text-xl items-center sm:ml-5  py-3 mb-2;
            color: #CCCCCC;
        }
}

</style>

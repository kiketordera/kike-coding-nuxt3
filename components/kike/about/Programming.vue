<template>
  <div class="program">
    <h3>
      Coding
    </h3>
    <div class="skills">
      <img src="~assets/svg/kk/go-language.svg" alt="">
      <span>
        Golang
      </span>
      <img src="~assets/svg/kk/swift-language.svg" alt="">
      <span>
        Swift
      </span>
      <img src="~assets/svg/kk/html-language.svg" alt="">
      <span>
        html
      </span>
      <img src="~assets/svg/kk/css-style.svg" alt="">
      <span>
        Css/Sass
      </span>
      <img src="~assets/svg/kk/typescript-language.svg" alt="">
      <span>
        Typescript
      </span>
    </div>
    <p>
      Level-C2
    </p>
    <div class="skills">
      <img src="~assets/svg/kk/dart-language.svg" alt="">
      <span>
        Dart
      </span>
      <img src="~assets/svg/kk/flutter-language.svg" alt="">
      <span>
        Flutter
      </span>
      <img src="~assets/svg/kk/java-language.svg" alt="">
      <span>
        JAVA
      </span>
      <img src="~assets/svg/kk/vue-language.svg" alt="">
      <span>
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
                @apply lg:flex lg:flex-row items-center grid grid-cols-6 gap-3 mb-2;
                img {
                  @apply ml-2 lg:ml-0;
                }
                span {
                    @apply text-base ;
                    color: #CCCCCC;
                }
        }
        p {
             @apply text-xl items-center sm:ml-5  py-3 mb-2;
            color: #CCCCCC;
        }
}

</style>

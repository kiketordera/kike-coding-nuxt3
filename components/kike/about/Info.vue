<template>
  <section>
    <div class="about-us">
      <h2 data-aos="zoom-in-up">
        About
      </h2>

      <div class="info">
        <p data-aos="fade-right">
          Hi! I'm Kike Tordera. Berlin based.
        </p>
        <p data-aos="fade-right">
          Programming? That's my jam! 🚀 My roots in coding run deep, nurtured by rigorous studies and spiced up
          with international flair. And guess what? As a kid, I was that go-to tech whiz, always tinkering with computers.
        </p>
        <p data-aos="fade-right">
          But here's the twist: I'm not just about the code. I'm passionate about crafting experiences.
          🎨 To me, a sleek design and intuitive interface aren't just the icing on the cake—they're essential
          ingredients.
        </p>
        <p data-aos="fade-right">
          Because, in the end, it's all about creating something that's more than just the sum of its parts. Ready to
          create magic together?
        </p>
        <img src="~assets/img/kk/kike.png" alt="" class="profile">
        <button data-aos="zoom-up-down" type="submit">
          <img src="~assets/svg/kk/resume.svg" alt="">
          <a href="/kike-tordera-cv.pdf">Download Resume</a>
        </button>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
section {
  @apply w-full py-40 mx-auto;

  .about-us {
    @apply max-w-6xl flex gap-2 lg:flex-row flex-col mx-auto px-4;

    h2 {
      @include title-kike-section;
      @apply w-1/3;
    }

    .info {
      @apply w-2/3 text-justify;

      p {
        @apply lg:text-lg my-6 items-start;
        color: #CCCCCC;
      }

      button {
        @apply text-base uppercase flex gap-3 mt-5 text-center lg:w-auto w-full;
        color: $background-color;
        font-weight: 600;

        span {
          color: #CCCCCC;
        }
      }
    }
  }
}</style>

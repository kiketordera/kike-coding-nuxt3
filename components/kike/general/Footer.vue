
<template>
  <section>
    <div class="contact">
      <div class="details">
        <h2>Get in touch</h2>
        <img src="~assets/svg/kk/right-arrow.svg" alt="">
      </div>
      <hr>
      <div class="social-media">
        <div class="items">
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
      </div>
    </div>
    <hr>
    <div class="copyright">
      <p>Copyright © 2023 Kike Tordera All Rights Reserved</p>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss" scoped>
section {
    @apply w-full mx-auto;
    background-color: black;
    .contact {
        @apply py-40 mx-auto max-w-6xl px-4;
        background-color: black;
        .details {
          @apply flex lg:gap-3 items-center  gap-4 justify-center;
          background-color: black;
          h2 {
              @apply text-center lg:text-9xl font-extrabold text-4xl uppercase tracking-wide ;
                 font-family: 'Source Code Pro SemiBold';
                 color: white;
                 background-color: black;
          }
          img {
            @apply lg:w-auto w-8;
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
            background-color: black;
            .items {
                @apply text-xl uppercase mb-5;
                background-color: black;
                ul {
                    @apply flex gap-8 mx-8;
                    background-color: black;
                    li {
                        color: $button-color;
                       img {
                        @apply w-8 h-8;
                        background-color: black;
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
    .copyright {
       background-color: black;
       p {
        @apply py-6 text-xl text-center;
        background-color: black;
        color: #595959;
       }
    }
}

</style>

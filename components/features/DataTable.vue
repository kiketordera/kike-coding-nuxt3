<template>
  <section>
    <div class="system">
      <div class="title">
        <img src="~/assets/svg/calendar.svg" alt="">
        <p>
          Make <span>decisions</span> with the <span>data</span> on the table
        </p>
      </div>
      <div class="content">
        <div class="info">
          <p>
            Making an inventory can be tricky. No one has the same needs, and even in the same collection, not
            every item needs to be
            a check in the same way. Maybe actually is not the number of items you want to control but the state
            of that items.
          </p>
          <p>
            To collect all these data in an effective way, you can create a dynamic form combined by:
          </p>
          <li>As many checkboxes as you need </li>
          <li>
            As many numbers as you need
          </li>
          <li>
            As many photos as you need
          </li>
          <li>
            As many descriptions as you need
          </li>
          <li>
            You can select how often do you want to check the item: only once, daily, weekly or monthly
          </li>
        </div>
        <div class="box-img">
          <div class="details">
            <img src="~assets/img/car.png" alt="">
            <p>
              Create your own video courses and introduce them into the system.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
section {
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  place-content: center;
  padding: 3rem 0rem;

  .system {
    margin-bottom: 2rem;
    font-weight: 400;

    .title {
      display: flex;
      justify-content: center;
      padding-bottom: 1rem;
      align-items: center;
      gap: 2rem;
      align-items: center;

      img {
        height: 60px;
      }

      p {
        font-size: 2.4rem;
        text-align: center;
        font-weight: 900;

        span {
          color: #63B190;
        }

      }

      @media screen and (max-width: 768px) {
        p {
          @apply text-base mb-2;
        }

        img {
          @apply w-10 h-auto;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: row;
      gap: 2;
      width: 100%;

      .info {
        margin: 0 auto;
        width: 100%;
        max-width: 72rem;
        margin: 0 7rem;

        p {
          max-width: 56rem;
          align-items: center;
          text-align: justify;
          font-size: 20px;
          padding-bottom: 2rem;
          padding-top: 0.5rem;

        }
      }

      .box-img {
        padding-top: 2.5rem;
        padding: 2.5rem 0rem;

        .details {
          align-items: center;

          img {
            height: auto;
            max-width: 100%;
            width: 25%;
            margin: 0rem 6rem;
          }

          p {
            text-align: center;
            margin-top: 1rem;
            font-size: 1.2rem;
            letter-spacing: 3;
            width: 20rem;
          }
        }

      }
    }

    @media screen and (max-width: 768px) {
      .content {
        flex-direction: column;
        margin-bottom: 1rem;
        padding: 1rem 0rem;

        .info {
          @apply px-4 w-full max-w-6xl mx-4 text-base;
          margin: 0 auto;

          li {
            @apply mx-4;
          }
        }
      }
    }

  }
}
</style>

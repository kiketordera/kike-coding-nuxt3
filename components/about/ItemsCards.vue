<template>
  <section>
    <div class="card-items">
      <div class="items">
        <img src="~assets/img/workshop.png" alt="">
        <p>
          Software platform for the NGOs that works on the ground and they have a focus on vocational training or
          education
        </p>
      </div>
      <div class="items">
        <img src="~assets/svg/performance-color.svg" alt="">
        <p>
          The learning is based on video-tutorials, so it can be scalable and much more affordable that presencial
          training
        </p>
      </div>
      <div class="items">
        <img src="~assets/svg/wifi.svg" alt="">
        <p>
          Can be installed in any device as a server, including a RaspberryPI for remotes areas without network
          connection
        </p>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
section {
  max-width: 100rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;

  .card-items {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    width: 100%;

    .items {
      img {
        max-width: 20%;
        padding: 1rem 0rem;
        margin: 0rem 8rem;
      }
    }

  }
}
</style>

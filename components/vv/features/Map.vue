<template>
  <div class="inogro">
    <vv-about-Iconography-Languages />
    <div class="map-section">
      <div class="map">
        <img src="~/assets/svg/vv/world-map.svg" alt="">
      </div>
    </div>
    <vv-about-Iconography-Languages :reverse="true" />
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.inogro {
    .map-section {
        width: 100%;
  max-width: 56rem;
  margin: 0 auto;
  padding: 2rem 0rem;
    }
}

</style>

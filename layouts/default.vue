<template>
  <div>
    <kike-general-NavBar />
    <slot />
    <kike-general-Footer />
    <kike-general-TotemSignature />
  </div>
</template>

<script>
</script>

<style lang="scss">
.cookieControl__ControlButton {
  @apply z-10;
  left: 17px;
  right: auto;
  bottom: 10px;
}
.cookies {
  z-index: 1 !important;
  float: left;
}
</style>

<template>
  <div>
    <CookieControl :locale="getLang()" />
    <kike-general-NavBar />
    <slot />
    <kike-general-Footer />
    <kike-general-TotemSignature />
  </div>
</template>

<script setup lang="ts">
import { WhatsAppStateProvider } from '~/store/whatsapp'

// When user tries to leave the page we show the whatapp popup
const whatsAppState = WhatsAppStateProvider()

defineOgImageScreenshot({
  screenshot: {
    mask: '.whatsapp-popup-button .cookies-container',
    delay: 10000
  }
})

</script>

<style lang="scss">
.cookieControl__ControlButton {
  @apply z-10;
  left: 17px;
  right: auto;
  bottom: 10px;
}
.cookieControl__ModalContent input:checked + button {
  background-color: black;
}
.cookieControl__ModalContent input:not(:checked) + button {
  background-color: lightgray;
}
.cookies {
  z-index: 1 !important;
  float: left;
}
</style>

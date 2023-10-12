<template>
  <div>
    <vv-general-NavBar />
    <vv-features-Community />
    <vv-features-Map />
    <vv-features-OfflineMode />
    <vv-features-Cards />
    <ClientOnly>
      <vv-features-WifiAnimation />
    </ClientOnly>
    <vv-features-Cards2 />
    <vv-features-Step />
    <vv-features-Chain />
    <vv-features-DataTable />
    <vv-features-Analysis />
  </div>
</template>

<script lang="ts" setup>
// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: 'vv',
})
</script>

<style lang="scss" scoped>
* {
    font-family: $nunito-regular;
    background-color: white;
}

</style>

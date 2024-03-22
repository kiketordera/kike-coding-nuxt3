<template>
  <div>
    <!-- <vv-general-NavBar /> -->
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

useSeoMeta({
  title: 'Kike Tordera | Value Villages - Features that empower marginalised communities',
  // eslint-disable-next-line max-len
  description: 'Empowering Communities with Digital Solutions. Dive into a comprehensive platform tailored for NGOs, offering custom services, real-time data, and multi-language support. From offline modes in remote areas to step-by-step video tutorials, experience a system designed for scalability and inclusivity. Harness the power of QR codes for seamless tracking, dynamic inventory management, and detailed reporting. With data-driven insights, Value Villages ensures NGOs can make informed decisions, foster transparency, and showcase the impact of their initiatives.',
})
</script>

<style lang="scss" scoped>
* {
    font-family: $nunito-regular;
    background-color: white;
}

</style>

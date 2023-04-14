<template>
  <div class="img">
    <features-WifiDevices />
    <features-WifiWaves />
  </div>
</template>

<script lang="ts" setup>

let devicesZoom = false
let startAnimation = true

function waitPromise (_: any) {
  return new Promise((resolve) => {
    if (!startAnimation) {
      setTimeout(resolve, 1300)
    } else if (devicesZoom) {
      setTimeout(resolve, 600)
    } else {
      setTimeout(resolve, 100)
    }
  })
}

async function animate () {
  const raspbian = document.getElementById('raspbian')
  const vue = document.getElementById('vue')
  const bootstrap = document.getElementById('bootstrap')
  const gingonic = document.getElementById('gingonic')
  const golang = document.getElementById('golang')
  const docker = document.getElementById('docker')
  const devices = document.getElementById('devices')

  const latency = 5

  while (true) {
    startAnimation = true
    raspbian!.style.opacity = '0'
    await waitPromise(latency)
    raspbian!.style.opacity = '1'
    docker!.style.opacity = '0'
    await waitPromise(latency)
    docker!.style.opacity = '1'
    golang!.style.opacity = '0'
    await waitPromise(latency)
    golang!.style.opacity = '1'
    gingonic!.style.opacity = '0'
    await waitPromise(latency)
    gingonic!.style.opacity = '1'
    bootstrap!.style.opacity = '0'
    await waitPromise(latency)
    bootstrap!.style.opacity = '1'
    vue!.style.opacity = '0'
    await waitPromise(latency)
    vue!.style.opacity = '1'
    devicesZoom = true
    console.log(devices)
    devices!.classList.add('scale')
    await waitPromise(1500)
    devices!.classList.remove('scale')
    await waitPromise(500)

    devicesZoom = false
    startAnimation = false
    await waitPromise(500)
  }
}

onMounted(() => {
  animate()
})

</script>

<style lang="scss" scoped>
.img {
  max-width: 72rem;
  margin: 0 auto;

  .background-img {
    max-width: 100%;
    margin: 0 auto;
    margin-top: 4rem;
    padding: 0rem 7rem;
  }
}
</style>

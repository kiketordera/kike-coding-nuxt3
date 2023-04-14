<template>
  <div class="img">
    <div class="software-layers">
      <img id="devices" src="~assets/svg/vv/devices.svg" class="devices" alt="">
      <features-WifiWaves class="waves" />
    </div>
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
svg:not(:root) {
    overflow: hidden;
    width: 100%;
    max-width: 850px;
    align-items: center;
    align-self: center;
    vertical-align: top;
    margin-bottom: -350px;
}

.scale {
    transform: scale(1.4);
    transition: all .3s;
}

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

.software-layers {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    vertical-align: top;
    justify-content: center;
    margin-right: 5px;
}

.devices {
    width: 70%;
    max-width: 550px;
    align-items: center;
    align-self: center;
    margin-bottom: -149px;
    margin-left: -250px;
    transition: all .3s;
}

@media (max-width: 950px) {
    svg:not(:root) {
        margin-left: 20px;
    }
}

@media (max-width: 822px) {
    .devices {
        max-width: 450px;
        margin-bottom: -120px;
        margin-left: -200px;
    }
}

@media (max-width: 690px) {
    .devices {
        max-width: 370px;
        margin-bottom: -110px;
        margin-left: -160px;
    }
}

@media (max-width: 611px) {
    .devices {
        max-width: 300px;
        margin-bottom: -95px;
        margin-left: -130px;
    }
    .software-layers {
        margin-right: 50px;
        margin-bottom: -315px;
      }
      svg:not(:root) {
        margin-left: 40px;
        margin-bottom: -215px;
    }
}

@media (max-width: 550px) {
    .devices {
        max-width: 250px;
        margin-bottom: -70px;
        margin-left: -100px;
    }
}

@media (max-width: 450px) {
    .devices {
        max-width: 200px;
        margin-bottom: -58px;
        margin-left: -73px;
    }
}

@media (max-width: 380px) {
    .devices {
        max-width: 150px;
        margin-bottom: -48px;
        margin-left: -53px;
    }
}

@media (max-width: 350px) {
    .devices {
        margin-bottom: -38px;
        margin-left: -31px;
    }
}

@media (max-width: 290px) {
    .devices {
        margin-bottom: -38px;
        margin-left: -4px;
    }
}
</style>

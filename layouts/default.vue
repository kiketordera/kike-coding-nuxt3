<template>
  <div>
    <kike-general-NavBar :current-section="currentSection" @section-clicked="onSectionClicked" />
    <slot />
    <kike-general-Footer />
    <kike-general-TotemSignature />
  </div>
</template>

<script setup lang="ts">
import { LinkActiveStateProvider } from '~/store/linkactive'

const linkstate = LinkActiveStateProvider()
const sections: Array<string> = ['work', 'contact']
const currentSection = ref<string>('')

const onSectionClicked = ({ section }: { section: string }) => {
  currentSection.value = section
}
const checkSectionInView = () => {
  for (let i = sections.length - 1; i >= 0; i--) {
    const el = document.getElementById(sections[i])
    const rect = el?.getBoundingClientRect()

    // Check if the top of the section is within the top 25% of the viewport height
    if (rect && rect.top <= window.innerHeight / 1.5 && rect.bottom >= 0) {
      currentSection.value = sections[i]
      // router.replace({ hash: `#${sections[i]}` })
      window.history.replaceState(window.history.state, '', `#${sections[i]}`)
      linkstate.$state.isActive = false
      break
    } else {
      currentSection.value = ''
      window.history.replaceState(window.history.state, '', `${window.location.pathname}`)
      linkstate.$state.isActive = true
    }
  }
}

const debouncedCheckSectionInView = debounce(checkSectionInView, 50)

onMounted(() => {
  window.addEventListener('scroll', debouncedCheckSectionInView)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', debouncedCheckSectionInView)
})

function debounce (func: (...args: any[]) => void, wait: number, immediate = false) {
  let timeout: ReturnType<typeof setTimeout> | null
  return (...args: any[]) => {
    const later = () => {
      timeout = null
      if (!immediate) { func(...args) }
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout!)
    timeout = setTimeout(later, wait)
    if (callNow) { func(...args) }
  }
}
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
  background-color: grey;
}
.cookies {
  z-index: 1 !important;
  float: left;
}
</style>

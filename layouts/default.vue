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

    // Check if the section is entirely visible within the viewport
    if (rect && rect.top >= 0 && rect.bottom <= window.innerHeight) {
      currentSection.value = sections[i]
      window.history.replaceState(null, '', `#${sections[i]}`)
      linkstate.$state.isActive = false
      break
    } else {
      currentSection.value = ''
      window.history.replaceState(null, '', `${window.location.pathname}`)
      linkstate.$state.isActive = true
    }
  }
}

const debouncedCheckSectionInView = debounce(checkSectionInView, 100)

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
.cookies {
  z-index: 1 !important;
  float: left;
}
</style>

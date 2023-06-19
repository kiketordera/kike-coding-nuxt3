import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior (to, from) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // The remainder is not relevant to this discussion but maybe useful as well

    // if link is to same page, scroll to top with smooth behavior
    if (to === from) {
      return {
        left: 0,
        top: 0,
        behavior: 'smooth',
      }
    }

    if (from) {
      return {
        left: 0,
        top: 0,
        behavior: 'smooth',
      }
    }
  },
}

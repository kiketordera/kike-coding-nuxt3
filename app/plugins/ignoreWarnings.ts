// plugins/ignoreWarnings.ts
import { defineNuxtPlugin } from '#app';
import { warn } from 'vue';

export default defineNuxtPlugin(() => {
  const originalWarn = console.warn;

  console.warn = (...args: any[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Failed to resolve component: swiper-slide') || args[0].includes('Failed to resolve component: swiper-container')) {
      // Ignore the specific warning for swiper-slide
      return;
    }
    originalWarn(...args); // Call the original console.warn for other warnings
  };
});
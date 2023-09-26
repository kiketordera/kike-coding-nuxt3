<template>
  <div class="scroll-parent" :style="styleObject">
    <div
      class="scroll-element"
      :class="props.scrollRight ? 'left-primary' : 'right-primary'"
      :style="props.paused ? 'animation-play-state: paused;' : ''"
    >
      <img
        v-for="(image, index) in props.images"
        :key="index"
        :src="image"
        alt="Sliding Image"
        @error="handleImageError"
      >
    </div>
    <div
      class="scroll-element"
      :class="props.scrollRight ? 'left-secondary' : 'right-secondary'"
      :style="props.paused ? 'animation-play-state: paused;' : ''"
    >
      <img
        v-for="(image, index) in props.images"
        :key="index"
        :src="image"
        alt="Sliding Image"
        @error="handleImageError"
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
  scrollRight: {
    type: Boolean,
    required: true,
  },
  duration: {
    type: String,
    default: '30s',
  },
  direction: {
    type: String,
    default: 'normal',
  },
  delay: {
    type: String,
    default: '0s',
  },
  paused: {
    type: Boolean,
    default: false,
  },
})

const styleObject = ref({
  '--animation-duration': props.duration,
  '--animation-delay': props.delay,
  '--animation-direction': props.direction,
})

const handleImageError = (event:any) => {
  event.target.src = 'path/to/placeholder-image.jpg'
}
</script>

<style lang="scss" scoped>
.scroll-parent {
  position: relative;
  width: 100vw;
  height: 6.5rem;
  min-width: 100vw;
  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    height: 5.2rem;
  }

  @media screen and (max-width: 480px) {
    height: 4rem;
  }
}

.scroll-element {
  width: inherit;
  height: inherit;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  animation: left-primary var(--animation-duration) linear infinite var(--animation-delay) var(--animation-direction);

  @media screen and (max-width: 768px) {
    max-height: 4rem;
    gap: 0.8rem;
  }

  @media screen and (max-width: 480px) {
    gap: 0.7rem;
    max-height: 3rem;
  }

  img {
    object-fit: contain;
    max-width: 140px;
    margin-right: 4rem;
  }
}

.left-primary {
  animation-name: left-primary;
}

.left-secondary {
  animation-name: left-secondary;
}

.right-primary {
  animation-name: right-primary;
}

.right-secondary {
  animation-name: right-secondary;
}

@keyframes left-primary {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes left-secondary {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes right-primary {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}

@keyframes right-secondary {
  from {
    transform: translateX(0%);
    max-width: 72rem;
  }
  to {
    transform: translateX(100%);
    max-width: 72rem;
  }
}
</style>

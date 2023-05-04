<template>
  <div class="image-text">
    <div v-if="position === 'left'" class="image">
      <img :src="image" alt="">
    </div>
    <div v-if="position === 'left'" class="text">
      <p>{{ text }}</p>
    </div>
    <div v-if="position === 'right'" class="text">
      <p>{{ text }}</p>
    </div>
    <div v-if="position === 'right'" class="image">
      <img :src="image" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">

import { PropType } from 'vue'

const props = defineProps({

    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    }
})

</script>

<style scoped>
.image-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}

.image {
  width: 40%;
}

.text {
  width: 50%;
}

.text p {
  margin: 0;
  padding: 10px;
}
</style>

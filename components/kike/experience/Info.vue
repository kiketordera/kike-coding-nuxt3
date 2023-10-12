<template>
  <div class="info">
    <h2>Functionalities</h2>
    <div>
      <h3>a) Event Booking</h3>
      <p>
        Navigate the richness of East African events with our seamless booking platform.
      </p>
      <ul>
        <li>
          <span>purpose:</span>
          Empower tourists to effortlessly book events resonating with their diverse interests.
        </li>
        <li>
          <span>Features:</span>
        </li>
        <li>
          Comprehensive event details for informed decision-making
        </li>
        <li>
          Secure and intuitive booking experience
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.info {
    @apply flex lg:flex-row flex-col
  py-10 mx-auto max-w-6xl px-4;
  h2,h3 {
    @apply text-2xl lg:w-1/2 mb-4;
    color: white;
  }
  p {
    @apply text-base;
  }
  ul {
    @apply mt-4 w-2/3 list-disc;
    li {
        @apply my-4;
        span {
          color: $button-color;
        }
    }
  }
}

</style>

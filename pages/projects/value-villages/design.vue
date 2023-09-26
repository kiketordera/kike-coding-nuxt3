<template>
  <div>
    <h1>
      Design beyond boundaries
    </h1>
    <vv-design-info
      class="mt-28"
      icon="lock-color.svg"
      :texts="auth"
      image="authenication.png"
      :left="true"
      title="Authentication"
    />
    <vv-design-Dashboard />
    <vv-design-info
      class="mt-28"
      icon="alphabet-color.svg"
      :texts="numerical"
      image="design-num.png"
      :left="true"
      title="Numerical alphabet"
    />
    <div class="bg-blue">
      <vv-design-info
        class="mt-28"
        icon="performance-bg-blue.svg"
        :texts="performance"
        image="vikapu.png"
        :left="false"
        title="Performance"
      />
    </div>
    <vv-design-info
      class="mt-28"
      icon="video-color.svg"
      :texts="video"
      image="vikapu.png"
      :left="true"
      title="Guides Video Courses"
    />
    <vv-design-BackgroundImage />
  </div>
</template>

<script lang="ts" setup>

// This will work in both `<script setup>` and `<script>`
definePageMeta({
  layout: 'vv',
})

const auth = [
  // eslint-disable-next-line max-len
  'When you start to create an interface adapted for illiteracy, you need to take normal routines that you do several times every day and reinvent it, giving them a better understanding and simplicity.',
  // eslint-disable-next-line max-len
  'One of these daily routines is introducing a password. Instead of a password, they can remember a story with 4 animals, and the iconography of the animals in convention with their photo, the software is able to give to the user the security they need to use the system.'
]

const numerical = [
  // eslint-disable-next-line max-len
  'A numerical alphabet, like the roman but simplified, related to their currency to ensure that a person without the knowledge of the numbers will be able to understand how much money he/she needs to get paid.',
  // eslint-disable-next-line max-len
  'It can create any combination that the scope of the project can generate (covering all the money quantities) and is easily adaptable to any currency.'
]

const performance = [

  'w to the workers and the money invested in the materials to make the products.',
  // eslint-disable-next-line max-len
  ' You can see the data globally by all services, locally buy a specific service, or individually, by a specific worker in the system. All the views have the data in written words and numbers, in the graphic and numerical alphabet and with a chart for the representation.'
]

const video = [
  // eslint-disable-next-line max-len
  'Custom video tutorials, divided in steps for a guided and easy comprehension and with warnings about common mistakes to guide the process and avoid material waste.',
  'Also includes a set with icons and photos for a quick graphical resume of the tools and materials needed for the step.'
]
</script>

<style lang="scss" scoped>
* {
    font-family: $nunito-regular;
}

.bg-blue {
  @apply pt-2 pb-16 mt-24;
  background-color: $branding-blue;
}

  h1 {
    font-size: 2.4rem;
    margin-top: 7rem;
    text-align: center;
    letter-spacing: 4px;
    font-weight: 400;
  }

  @media screen and (min-width: 482px) and (max-width:768px) {
    h1 {
      font-size: 2rem;
      margin-top: 2.5rem;
    }
  }
</style>

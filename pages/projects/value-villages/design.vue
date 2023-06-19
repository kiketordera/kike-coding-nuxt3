<!-- eslint-disable max-len -->
<!-- eslint-disable max-len -->
<template>
  <div>
    <vv-general-NavBar />
    <vv-design-Container>
      <vv-design-Authentication />
    </vv-design-Container>
    <vv-design-info
      class="mt-28"
      icon="lock-color.svg"
      :text="text"
      image="authenication.png"
      :left="true"
      title="Authentication"
    />
    <vv-design-info
      class="mt-28"
      icon="alphabet-color.svg"
      :text="text2"
      image="design-num.png"
      :left="true"
      title="Numerical alphabet"
    />
    <vv-design-info
      class="mt-28"
      icon="video-color.svg"
      :text="text3"
      image="vikapu.png"
      :left="true"
      title="Guides Video Courses"
    />
    <vv-design-Container>
      <vv-design-Performance />
    </vv-design-Container>
    <vv-design-BackgroundImage />
  </div>
</template>

<script lang="ts" setup>

// eslint-disable-next-line max-len
const text = 'When you start to create an interface adapted for illiteracy, you need to take normal routines that you do several times every day and reinvent it, giving them a better understanding and simplicity. One of these daily routines is introducing a password. Instead of a password, they can remember a story with 4 animals, and the iconography of the animals in convention with their photo, the software is able to give to the user the security they need to use the system.'
// eslint-disable-next-line max-len
const text2 = 'A numerical alphabet, like the roman but simplified, related to their currency to ensure that a person without the knowledge of the numbers will be able to understand how much money he/she needs to get paid.It can create any combination that the scope of the project can generate (covering all the money quantities) and is easily adaptable to any currency.'
// eslint-disable-next-line max-len
const text3 = 'Custom video tutorials, divided in steps for a guided and easy comprehension and with warnings about common mistakes to guide the process and avoid material waste.Also includes a set with icons and photos for a quick graphical resume of the tools and materials needed for the step.'
</script>

<style lang="scss" scoped>
* {
    font-family: 'Nunito Regular';
}
</style>

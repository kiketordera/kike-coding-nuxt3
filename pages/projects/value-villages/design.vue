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
      icon="lock-color.svg"
      :text="text"
      image="design-num.png"
      :left="true"
      title="Numerical alphabet"
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

</script>

<style lang="scss" scoped>
* {
    font-family: 'Nunito Regular';
}
</style>

<template>
  <section id="apps">
    <div class="about">
      <h2 data-aos="fade-up"> {{ $t('apps.title') }}</h2>
      <div class="grid-apps">
        <a
          v-for="app in developApps"
          :key="app.id"
          :href="app.appStoreURL"
          class="app-card"
          data-aos="fade-up"
          target="_blank"
        >
          <img :src="`/apps/logos/${app.id}.png`" :alt="app.name" class="app-image">
          <div class="">
            <h3 class="app-title" :style="{ color: app.accentColor }">{{ app.name }}</h3>
            <h4 class="app-body">{{ $t(`apps.${app.id}.description`) }}</h4>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { developApps } from '~/types/apps'
</script>

<style lang="scss" scoped>
section {
  @apply w-full;

  .about {
    @apply max-w-6xl mx-auto py-36 w-full lg:mx-auto px-4;
    
    
    h2 {
      @include title-kike-section;
    }
    
    .grid-apps {
      @apply grid grid-cols-1 md:grid-cols-2 gap-4;
      
      .app-card {
        @apply flex rounded-2xl overflow-hidden h-[135px] pr-4 cursor-pointer;
        border: 2px solid white;

        &:hover {
          background-color: rgba(255, 255, 255, 0.211);
        }

          img {
            @apply mr-4;
          }

          h3 {
            @apply text-2xl my-2;
            font-family: "Source Code Pro SemiBold";
          }
          
          h4 {
            @apply mb-2;
            color: white;
          }
        
      }
    }



  }
}
</style>

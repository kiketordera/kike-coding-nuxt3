<template>
  <div data-aos="fade-up" class="info">
    <p>
      {{ $t('valueVillagesSection.ngoFocus') }}
    </p>
    <p>
      {{ $t('valueVillagesSection.growingFarm') }}
    </p>
    <p>
      {{ $t('valueVillagesSection.empowerment') }}
    </p>
    <p>
      {{ $t('valueVillagesSection.softwarePlatform') }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.info {
  max-width: 56rem;
  margin: 0 auto;
  padding: 0rem 2rem;
  padding-top: 2rem;

  p {
    @apply text-base md:text-xl text-justify;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}
</style>

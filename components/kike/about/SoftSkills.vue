<template>
  <div class="soft-skill">
    <h3>
      Soft Skills
    </h3>
    <div class="timeline">
      <button type="button">
        Communication
      </button>
      <button type="button">
        TeamWork
      </button>
      <button type="button">
        Problem-solving
      </button>
      <button type="button">
        Time management
      </button>
      <button type="button">
        Adaptability
      </button>
      <button type="button">
        Leadership
      </button>
      <button type="button">
        Empathy
      </button>
      <button type="button">
        Conflict
      </button>
      <button type="button">
        Creativity
      </button>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.soft-skill {
    @apply py-4 w-full;

      h3 {
           @apply lg:text-4xl text-xl  tracking-wider mb-6 my-8;
                font-family: "Source Code Pro Bold";
                font-weight: 600;
                color: $button-color;
            }
            .timeline {
                @apply grid grid-cols-3 items-center gap-4 mb-3  text-sm;
                button {
                    @apply px-3 py-4 ;
                    border: 2px solid white;
                    color: white;
                }
        }
}

</style>

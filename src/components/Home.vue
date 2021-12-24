<template lang="pug">
//- LAYOUT
.bg-white.drop-shadow-lg.p-3.flex-center
  h1.text-3xl.font-bold MEMORY
//- SCOREBOARD
//- MAIN CONTAINER
.bg-gray-100.min-h-screen.pt-9.flex-center
  .grid.grid-cols-3.md_grid-cols-4.gap-6
    div.bg-white.p-9.rounded.border.border-black(
      v-for="index in 16"
      :key="index"
    ) {{ index }}
</template>
<script>
export default {};
</script>
<style lang="css">
.flex-center {
  @apply flex items-center justify-center;
}
</style>

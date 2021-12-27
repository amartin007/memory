<template lang="pug">
//- LAYOUT
.bg-sky-800.shadow-lg.shadow-slate-700.p-3.flex-center.relative
  h1.text-3xl.font-bold.text-white MEMORY
//- SCOREBOARD
//- MAIN CONTAINER
.bg-white.py-9
  //- CARD
  .mx-auto.p-6.bg-stone-700.rounded-lg.shadow-lg.shadow-slate-700(class="w-1/2")
    .grid.grid-cols-2.md_grid-cols-3.lg_grid-cols-4.gap-6
      .bg-black.aspect-square.p-9.rounded-lg.text-white.flex-center(
        v-for="index in 16"
        :key="index"
      ) {{ index }}
</template>
<script>
export default {};
</script>
<style>
.flex-center {
  @apply flex items-center justify-center;
}
</style>

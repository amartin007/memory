<template>
  <!-- LAYOUT -->
  <div class="bg-white drop-shadow-lg flex items-center justify-center p-3">
    <h1 class="text-3xl font-bold">MEMORY</h1>
  </div>
  <!-- SCOREBOARD -->
  <!-- MAIN CONTAINER -->
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="grid grid-cols-3 md:grid-cols-4 gap-6">
      <div
        v-for="index in 16"
        :key="index"
        class="bg-white p-9 rounded border border-black"
      >
        {{ index }}
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang=""></style>

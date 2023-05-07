<script setup lang="ts">
const currentStore = useCurrentStore();
</script>

<template>
  <div
    class="w-full py-4 text-3xl font-bold text-center flex items-center justify-center gap-4"
  >
    <span class="text-slate-600">{{ currentStore.getTitle }}</span>
    <div
      class="w-5 h-5 rounded-full animate-pulse"
      :class="currentStore.checkInternet ? 'bg-green' : 'bg-red'"
    ></div>
  </div>
</template>

<style scoped></style>

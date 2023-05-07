<script setup lang="ts">
withDefaults(
  defineProps<{
    type: "danger" | "success";
  }>(),
  {
    type: "success",
  }
);
</script>

<template>
  <button class="p-2 text-xl text-white outline-none border-none rounded-sm " :class="type ? 'bg-red-5' : 'bg-green-5'">
    <slot />
  </button>
</template>

<style scoped></style>

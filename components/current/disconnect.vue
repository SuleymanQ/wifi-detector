<script setup lang="ts">
import { ElButton } from "element-plus";
const currentStore = useCurrentStore();
</script>

<template>
  <div class="w-full flex items-center justify-center my-2">
    <ElButton
      @click="currentStore.disconnect()"
      type="danger"
      class="w-1/2"
      size="large"
    >
      Aýrylmak
    </ElButton>
  </div>
</template>

<style scoped></style>

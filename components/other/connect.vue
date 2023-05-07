<script setup lang="ts">
import { ElButton, ElPopover, ElInput } from "element-plus";

defineProps<{
  ssid: string;
}>();

const otherStore = useOtherStore();
let password = ref("");
</script>

<template>
  <ElPopover placement="top-start" trigger="click" :title="ssid">
    <template #reference>
      <ElButton type="success" class="w-full my-2">Baglan</ElButton>
    </template>
    <ElInput
      v-model:model-value="password"
      @keydown.enter="otherStore.connect(ssid, password)"
      placeholder="Gizlin kod"
      type="password"
      show-password
    />
  </ElPopover>
</template>

<style scoped></style>

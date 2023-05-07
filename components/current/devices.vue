<script setup lang="ts">
import {
  ElDialog,
  ElButton,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
} from "element-plus";
const cdStore = useConnectedDeviceStore();
</script>

<template>
  <ElDialog
    width="80%"
    title="Bagly enjamlar"
    v-model:model-value="cdStore.showDialog"
  >
    <div class="w-full py-2 grid grid-cols-4 gap-4">
      <div v-for="(device, index) in cdStore.devices" :key="index">
        <span class="mx-4 text-slate-600 font-bold text-lg">
          {{
            !device.name || device.name == "?"
              ? `Enjam ${index + 1}`
              : device.name
          }}
        </span>
        <ElDescriptions direction="vertical" :column="2">
          <ElDescriptionsItem label="IP address">{{
            device.ip
          }}</ElDescriptionsItem>
          <ElDescriptionsItem label="MAC address">
            <ElTag>{{ device.mac }}</ElTag>
          </ElDescriptionsItem>
        </ElDescriptions>
      </div>
    </div>
    <template #footer>
      <div class="w-full flex gap-2 justify-end">
        <ElButton type="info" @click="cdStore.toggle()">Ýap</ElButton>
      </div>
    </template>
  </ElDialog>
</template>

<style scoped></style>

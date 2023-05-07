<script setup lang="ts">
import {
  ElProgress,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
} from "element-plus";
defineProps<{
  ssid: string;
  mac: string;
  channel: number | string;
  frequency: number | string;
  signal_level: number | string;
  quality: number | string;
  security: string;
}>();

const colors = [
  { color: "#ff4040", percentage: 20 },
  { color: "#ffa040", percentage: 40 },
  { color: "#d4ff40", percentage: 60 },
  { color: "#40ff55", percentage: 80 },
  { color: "#40ffe7", percentage: 100 },
];
const currentStore = useCurrentStore();
</script>

<template>
  <div class="bg-white rounded-md shadow-sm p-2 border-2 border-slate-500">
    <div class="flex gap-4 justify-between items-center px-5">
      <span>{{ ssid }}</span>
      <el-progress
        :width="80"
        type="dashboard"
        class="text-xl"
        :percentage="Math.floor((+quality * 100) / 160)"
        :color="colors"
      >
        <template v-slot="{ percentage }">
          <span class="text-[16px] font-bold">{{ percentage }} %</span>
        </template>
      </el-progress>
    </div>
    <ElDescriptions border :column="2" size="small" class="w-full">
      <ElDescriptionsItem label="Frekans">
        {{ frequency }} MHz
      </ElDescriptionsItem>
      <ElDescriptionsItem label="Signal derejesi">
        <ElTag>{{ signal_level }} dB</ElTag>
      </ElDescriptionsItem>
      <ElDescriptionsItem v-if="security" label="Goragy">
        {{ security }}
      </ElDescriptionsItem>
      <ElDescriptionsItem v-if="mac" label="MAC">
        {{ mac }}
      </ElDescriptionsItem>
      <ElDescriptionsItem label="Kanal">
        {{ channel }}
      </ElDescriptionsItem>
    </ElDescriptions>
    <OtherConnect v-if="!currentStore.data" :ssid="ssid" />
  </div>
</template>

<style scoped></style>

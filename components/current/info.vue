<script setup lang="ts">
import {
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElButton,
} from "element-plus";
const currentStore = useCurrentStore();
const cdStore = useConnectedDeviceStore();
cdStore.getDevices();
cdStore.checkDevices();
</script>

<template>
  <el-descriptions
    title="Goşmaça maglumatlar"
    direction="vertical"
    :column="3"
    size="large"
    border
  >
    <el-descriptions-item label="Bagly enjamlar (san)">
      <div class="w-full flex justify-between">
        <ElTag>{{ cdStore.devices.length }}</ElTag>
        <ElButton @click="cdStore.toggle()" size="small" type="primary"
          >görmek</ElButton
        >
        <CurrentDevices />
      </div>
    </el-descriptions-item>
    <el-descriptions-item label="Frekans">{{
      currentStore.data?.frequency
    }} MHz</el-descriptions-item>
    <el-descriptions-item label="Kanal">{{
      currentStore.data?.channel
    }}</el-descriptions-item>
    <el-descriptions-item label="Goragy" :span="2">{{
      currentStore.data?.security
    }}</el-descriptions-item>
    <el-descriptions-item label="Signal derejesi">
      <el-tag type="warning">{{ currentStore.data?.signal_level }} dB</el-tag>
    </el-descriptions-item>
  </el-descriptions>
</template>

<style scoped></style>

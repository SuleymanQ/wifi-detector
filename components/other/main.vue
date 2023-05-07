<script setup lang="ts">
import { useOtherStore } from "../../store/other";
const currentStore = useCurrentStore();
const otherStore = useOtherStore();
otherStore.getWifis();
</script>

<template>
  <div class="w-[96%] h-[95%] mt-4 overflow-y-auto space-y-5">
    <OtherTitle />
    <div class="grid grid-cols-2 gap-2 items-center">
      <template v-for="other in otherStore.wifis">
        <OtherCard
          v-if="other.ssid !== currentStore.data?.ssid"
          v-bind="other"
        />
      </template>
    </div>
  </div>
</template>

<style scoped></style>

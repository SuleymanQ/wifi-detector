<script setup lang="ts">
import { useCurrentStore } from "../../store/current";
import { options } from "@/components/helpers/chart";
const currentStore = useCurrentStore();
</script>

<template>
  <div class="w-full">
    <apexchart
      type="radialBar"
      class="mx-auto"
      :options="options"
      :series="currentStore.series"
    ></apexchart>
  </div>
</template>

<style scoped></style>

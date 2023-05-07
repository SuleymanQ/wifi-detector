<script setup lang="ts">
const currentStore = useCurrentStore();

await currentStore.getCurrent();
await currentStore.refresher();
</script>

<template>
  <div
    class="w-[95%] h-[90%] bg-white m-auto shadow-md rounded-md overflow-auto py-4 px-2"
    :class="!currentStore.data ? 'flex items-center justify-center' : ''"
  >
    <template v-if="currentStore.data">
      <CurrentTitle />
      <div class="flex h-72">
        <CurrentChart />
        <CurrentDisconnect />
      </div>
      <CurrentInfo />
    </template>
    <template v-else>
      <img src="modem.png" class="w-10/12" />
    </template>
  </div>
</template>

<style scoped></style>

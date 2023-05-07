import { defineStore } from "pinia";

interface IDevices {
  name: string;
  ip: string;
  mac: string;
}

export const useConnectedDeviceStore = defineStore("connected-devices", {
  state() {
    return {
      devices: [] as IDevices[],
      showDialog: false as boolean,
    };
  },
  actions: {
    async getDevices() {
      const { data } = await useAsyncData(() => $fetch("/api/devices"));
      if (data.value && data.value?.length > 0) {
        this.devices = data.value as IDevices[];
      }
    },
    async checkDevices() {
      setInterval(this.getDevices, 5000);
    },
    toggle() {
      this.showDialog = !this.showDialog;
    },
  },
});

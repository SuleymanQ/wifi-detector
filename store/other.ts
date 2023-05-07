import { ElMessage } from "element-plus";
import { defineStore } from "pinia";

export interface IWifi {
  ssid: string;
  mac: string;
  channel: number;
  frequency: number;
  signal_level: number;
  quality: number;
  security: string;
}

export const useOtherStore = defineStore("other-store", {
  state() {
    return {
      wifis: null as IWifi[] | null,
    };
  },
  actions: {
    async getWifis() {
      const { data } = await useAsyncData(() => $fetch("/api/wifi"));
      if (data.value) this.wifis = (data.value as IWifi[]).reverse();
    },
    async connect(ssid: string, password: string) {
      const { data } = await useAsyncData(() =>
        $fetch(`/api/connect`, {
          method: "POST",
          body: {
            ssid,
            password,
          },
        })
      );
      if (data.value) {
        ElMessage({
          message: data.value,
          type: "error",
        });
      } else {
        ElMessage({
          message: `${ssid} wifi çatyldy!`,
          type: "success",
        });
      }
    },
  },
});

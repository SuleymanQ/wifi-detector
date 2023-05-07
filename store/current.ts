import { defineStore } from "pinia";
import { ElMessage } from "element-plus";

interface IData {
  signal_level: number;
  quality: number;
  security: string;
  security_flags: any[];
  ssid: string;
  channel: string;
  frequency: number;
}

export const useCurrentStore = defineStore("current-store", {
  state() {
    return {
      data: null as IData | null,
      timer: null as unknown as NodeJS.Timer | null,
      checkInternet: false as boolean,
    };
  },
  getters: {
    series(state) {
      if (state.data) {
        return [Math.floor((state.data.quality * 100) / 170)];
      }
      return [0];
    },
    getTitle(state) {
      if (state.data) {
        return state.data.ssid;
      }
    },
  },
  actions: {
    async getCurrent() {
      const { data } = await useAsyncData(() => $fetch("/api/get_current"));
      this.checkInternetConnection();
      if (
        data.value?.length > 0 &&
        (data.value[0] as IData).signal_level !== 0
      ) {
        this.data = data.value[0];
      } else {
        this.data = null;
      }
    },
    async refresher() {
      this.timer = setInterval(this.getCurrent, 5000);
    },
    stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    },
    async checkInternetConnection() {
      const { data } = await useAsyncData(() =>
        $fetch("/api/check_connection")
      );
      this.checkInternet = data.value as boolean;
    },
    async disconnect() {
      const { error } = await useAsyncData(() => $fetch("/api/disconnect"));
      if (error.value) {
        ElMessage({
          message: "Siziň enjamyňyzdan çykmana rusgat ýok!",
          type: "error"
        });
      }
    },
  },
});

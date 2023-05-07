import UnoCSS from "unocss/vite";
import { defineNuxtConfig } from "nuxt/config";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@pinia/nuxt", "@unocss/nuxt"],
  css: ["~~/assets/main.css", "element-plus/dist/index.css", "virtual:uno.css"],
  unocss: {
    attributify: true,
    uno: true,
  },
  imports: {
    autoImport: true,
    dirs: ["store"],
  },
});

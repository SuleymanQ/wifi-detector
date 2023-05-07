import UnoCSS from "unocss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@pinia/nuxt", "@unocss/nuxt"],
  css: ["~~/assets/main.css", "element-plus/dist/index.css"],
  vite: {
    plugins: [
      UnoCSS({
        configFile: "./uno.config.ts",
      }),
    ],
  },
  imports: {
    autoImport: true,
    dirs: ["store"],
  },
});

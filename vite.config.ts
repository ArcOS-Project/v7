import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  envPrefix: "DW_",
  resolve: {
    alias: {
      $assets: resolve(__dirname, "./src/assets"),
      $state: resolve(__dirname, "./src/state"),
      $apps: resolve(__dirname, "./src/apps"),
      $css: resolve(__dirname, "./src/css"),
      $types: resolve(__dirname, "./src/types"),
      $ts: resolve(__dirname, "./src/ts"),
      $lib: resolve(__dirname, "./src/lib"),
    },
  },
  build: {
    minify: false,
  },
});

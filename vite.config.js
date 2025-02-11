import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: (id) => {
  //         if (id.includes("src/components/")) {
  //           return "components-chunk";
  //         }
  //         if (id.includes("vue") || id.includes("vue-router")) {
  //           return "vue-chunk";
  //         }
  //         if (id.includes("ant")) {
  //           return "antd-chunk";
  //         }
  //         if (id.includes("node_modules")) {
  //           return "vendor-chunk";
  //         }
  //         return null;
  //       },
  //       experimentalMinChunkSize: 10 * 1024,
  //     },
  //   },
  // },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});

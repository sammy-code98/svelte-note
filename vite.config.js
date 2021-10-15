import { defineConfig, searchForWorkspaceRoot } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        "/src/libs/utils",
        "/src/main.ts",
      ],
    },
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      "@": path.resolve("/src"),
    },
  },
});

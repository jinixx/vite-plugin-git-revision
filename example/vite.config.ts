import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import ViteGitRevision from "@jinixx/vite-plugin-git-revision";

// https://vitejs.dev/config/
export default defineConfig({
  define: {},
  plugins: [vue(), ViteGitRevision({})],
});

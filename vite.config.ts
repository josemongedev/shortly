import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/shortly",
  plugins: [
    react(),
    svgr(),
    // To avoid errors when doing path alias imports
    // https://stackoverflow.com/questions/68241263/absolute-path-not-working-in-vite-project-react-ts
    tsconfigPaths(),
  ],
});

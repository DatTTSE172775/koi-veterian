import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth": {
        target: "http://103.185.184.35:8080",
        changeOrigin: true,
      },
    },
  },
});

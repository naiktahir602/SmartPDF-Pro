import { defineConfig } from "vite";

export default defineConfig({
  // Ab humne 'root: client' hata diya hai kyunki index.html bahar hai
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});

import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import svelte from "@astrojs/svelte"
import AstroPWA from "@vite-pwa/astro"

export default defineConfig({
  site: "https://blog.sujang.xyz",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true,
      },
    }),
    svelte({ extensions: [".svelte"] }),
    AstroPWA(),
  ],
  output: "static",
  vite: {
    build: {
      rollupOptions: {
        external: "./src/**/*",
      },
    },
  },
})

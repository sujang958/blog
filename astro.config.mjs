import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"
import svelte from "@astrojs/svelte"
import AstroPWA from "@vite-pwa/astro"

// https://astro.build/config
import qwikdev from "@qwikdev/astro"

// https://astro.build/config
export default defineConfig({
  site: "https://blog.sujang.xyz",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true,
      },
    }),
    svelte(),
    AstroPWA(),
    qwikdev(),
    vercel({ functionPerRoute: false }),
  ],
  output: "hybrid",
  // adapter: vercel({
  //   functionPerRoute: false,
  // }),
  vite: {
    build: {
      rollupOptions: {
        external: "./src/**/*",
      },
    },
  },
})

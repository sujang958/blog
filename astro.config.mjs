import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
import svelte from "@astrojs/svelte"

import AstroPWA from "@vite-pwa/astro"

export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true,
      },
    }),
    svelte(),
    AstroPWA({}),
  ],
  output: "server",
  adapter: vercel(),
})

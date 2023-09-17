import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import svelte from "@astrojs/svelte";

import AstroPWA from "@vite-pwa/astro"

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: true
    }
  }), svelte(), AstroPWA()],
  output: "server",
  adapter: vercel({ functionPerRoute: false }),
});
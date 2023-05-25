import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: {
      applyBaseStyles: true
    }
  }), svelte()],
  output: "server",
  adapter: vercel()
});
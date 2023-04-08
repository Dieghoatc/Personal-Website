import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://dieghoatc.com",
  base: "/personalweb",
  output: "server",
  adapter: vercel()
});
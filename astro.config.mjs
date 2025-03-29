import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mike.fi",
  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      // https://shiki.style/themes
      theme: "tokyo-night",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
})
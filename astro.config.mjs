import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://mike.fi",
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      // https://shiki.style/themes
      theme: "tokyo-night",
    },
  },
})

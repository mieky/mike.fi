/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        main: "#aa5561",
        zinc: {
          80: "#f7f7f7",
          450: "#85858f",
        },
      },
      fontSize: {
        "code-sm": "0.825rem",
        "code-base": "0.925rem",
        "code-lg": "1.12rem",
        "code-xl": "1.2rem",
        "code-2xl": "1.45rem",
        "code-3xl": "1.825rem",
        "code-4xl": "2.15rem",
        "code-5xl": "2.9rem",
      },
    },
  },
  plugins: [],
}

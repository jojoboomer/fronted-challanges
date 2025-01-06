import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  // define the content to scan 👇🏻
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
    "src",
  ],
  exclude: [],
  outdir: "styled-system",
  theme: {
    extend: {
      tokens: {
        fonts: {
          Outfit: { value: 'Outfit, sans-serif' }
        },
        colors: {
          primary: {
            DEFAULT: { value: "#0070f3" },
            'nft-cyan': { value: "hsl(178, 100%, 50%)" },
            'nft-blue': { value: "hsl(215, 51%, 70%)" },
          },
          secondary: {
            DEFAULT: { value: "#ff4081" },
          },
          neutral: {
            DEFAULT: { value: "#333" },
            "nft-300": { value: "hsl(215, 32%, 27%)" },
            "nft-500": { value: "hsl(216, 50%, 16%)" },
            "nft-800": { value: "hsl(217, 54%, 11%)" },
          },
        },
      },
    },
  },
  globalCss: {
    "html, body": {
      position: "relative",
      fontFamily: "body",
      margin: 0,
      padding: 0,
      backgroundColor: "cian.400",
      'box-sizing': 'border-box'
    },
  },
});

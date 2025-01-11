import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
    "src",
  ],
  exclude: [],
  outdir: "styled-system",

  theme: {
    extend: {
      breakpoints: {
        xs: "375px",
      },
      tokens: {
        fonts: {
          Outfit: { value: "Outfit, sans-serif" },
          RedHat: { value: "var(--red-hat), sans-serif" },
          Lato: { value: "var(--lato), sans-serif" },
          Poppins: { value: "var(--poppins), sans-serif" },
        },
        colors: {
          primary: {
            DEFAULT: { value: "#0070f3" },
            "nft-cyan": { value: "hsl(178, 100%, 50%)" },
            "nft-blue": { value: "hsl(215, 51%, 70%)" },
            "singup-red": { value: "#ff7a7a" },
            "singup-green": { value: "hsl(154, 59.20%, 51.00%)" },
            "rose-50": { value: "var(--cart-bg)" },
            "rose-100": { value: "hsl(13, 31%, 94%)" },
            "rose-300": { value: "hsl(14, 25%, 72%)" },
            "rose-400": { value: "hsl(7, 20%, 60%)" },
            "rose-500": { value: "hsl(12, 20%, 44%)" },
            "rose-900": { value: "hsl(14, 65%, 9%)" },
          },
          secondary: {
            DEFAULT: { value: "#ff4081" },
          },
          accent: {
            "red-cart": { value: "var(--cart-red)" },
            "singup-blue": { value: "hsl(248, 32%, 49%)" },
          },
          neutral: {
            DEFAULT: { value: "#333" },
            "nft-300": { value: "hsl(215, 32%, 27%)" },
            "nft-500": { value: "hsl(216, 50%, 16%)" },
            "nft-800": { value: "hsl(217, 54%, 11%)" },
            "singup-dark-blue": { value: "hsl(246, 25%, 77%)" },
            "singup-grayish-blue": { value: "hsl(249, 10%, 26%)" },
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
      "box-sizing": "border-box",
    },
  },
});

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
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },
  theme: {
    extend: {
      breakpoints: {
        xs: "375px",
      },
      semanticTokens: {
        fonts: {
          Outfit: { value: "Outfit, sans-serif" },
          RedHat: { value: "var(--red-hat), sans-serif" },
          Lato: { value: "var(--lato), sans-serif" },
          Poppins: { value: "var(--poppins), sans-serif" },
          Josefin: { value: "var(--josefin), sans-serif" },
        },
        colors: {
          primary: {
            DEFAULT: { value: "#0070f3" },
            todo: { value: "#3a7bfd" },
            singup: { value: "#ff7a7a" },
            cart: { value: "#c73a0f" },
          },
          secondary: {
            DEFAULT: { value: "#ff4081" },
            singup: { value: "hsl(154, 59.20%, 51.00%)" },
          },
          accent: {
            singup: { value: "hsl(248, 32%, 49%)" },
          },
          neutral: {
            DEFAULT: { value: "#333" },
            singup: { value: "hsl(246, 25%, 77%)" },
            todo: {
              value: {
                _light: "#ffffff",
                _dark: "hsl(235, 24%, 19%)",
              },
            },
          },
          background: {
            todo: {
              value: {
                _light: "#fafafa",
                _dark: "#161722",
              },
            },
            nft: { value: "#0d192b" },
            nftCard: { value: "#14253d" },
            singup: { value: "#ff7a7a" },
            cart: { value: "#fcf9f7" }
          },
          text: {
            cart: { value: "#260f08" },
            todo: {
              primary: {
                value: {
                  _light: "#484b6a",
                  _dark: "#cacde8",
                },
              },
              secondary: {
                value: {
                  _light: "#9394a5",
                  _dark: "var(--todo-secondary)",
                },
              },
            },
            nft: {
              primary: { value: "hsl(215, 51%, 70%)" },
              secondary: { value: "hsl(178, 100%, 50%)" },
            },
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
      boxSizing: "border-box",
    },
  },
});

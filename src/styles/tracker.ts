import { css } from "@styled-system/css";

// "dark-gray": {
//   DEFAULT: { value: "hsl(0, 0%, 17%)" },
// },
// "ligth-gray": {
//   DEFAULT: { value: "hsl(0, 0%, 59%)" },
// },

export const main = css({
  h: "100vh",
  color: "hsl(0, 0%, 17%)",
  fontWeight: "500",
  display: "flex",
  flexDir: "column",
  fontFamily: "Rubik",
  position: "relative",
  overflow: "hidden",
});

export const pattern = css({
  h: "40%",
  maxH: "40%",
  w: "100%",
  position: "relative",
  margin: "0 auto",
  backgroundImage: {
    base: 'url("/tracker/pattern-bg-mobile.png")',
    md: 'url("/tracker/pattern-bg-desktop.png")',
  },
  backgroundPosition: "center",
  backgroundSize: "cover",
  display: "flex",
  flexDir: "column",
  alignItems: "center",
  zIndex: "10",
  boxShadow:
    "rgba(40, 40, 50, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
});

export const map = css({
  w: "100%",
  flex: 1,
  bg: "#333",
  zIndex: "1",
});

export const title = css({
  color: "white",
  fontSize: "1.8rem",
  fontWeight: "500",
  paddingY: "1.5rem",
  letterSpacing: "0.1rem",
});

export const dataContainer = css({
  base: {
    w: "20rem",
    flexDir: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingY: "1rem",
    gap: "1rem",
    marginY: "2rem",
  },
  md: {
    w: "65rem",
    flexDir: "row",
    justifyContent: "space-between",
    alignItems: "start",
    paddingY: "2rem",
    gap: 0,
    marginY: "2.5rem",
  },
  backgroundColor: "white",
  borderRadius: "10px",
  display: "flex",
  boxShadow:
    "rgba(40, 40, 50, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
});

export const dataSection = css({
  base: {
    alignItems: "center",
    p: 0,
    gap: "0.2rem",
  },
  md: {
    alignItems: "flex-start",
    px: "2.5rem",
    gap: "0.5rem",
  },
  display: "flex",
  w: "100%",
  flexDirection: "column",
  "& .section-title": {
    base: {
      fontSize: "0.6rem",
    },
    md: {
      fontSize: "0.7rem",
    },
    color: "hsl(0, 0%, 59%)",
    textTransform: "uppercase",
    letterSpacing: "0.1rem",
    fontWeight: "700",
  },
  "& .section-value": {
    base: {
      fontSize: "1.2rem",
    },
    md: {
      fontSize: "1.5rem",
      lineHeight: "1.2",
    },
  },
});

export const dataSeparator = css({
  display: {
    base: "none",
    md: "block",
  },
  backgroundColor: "hsla(0, 0%, 59%, 0.2)",
  width: "1px",
  px: "1px",
  height: "100%",
  contain: "",
});

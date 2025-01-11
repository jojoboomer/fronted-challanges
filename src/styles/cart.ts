import { css } from "@styled-system/css";
import { grid } from "@styled-system/patterns";

export const main = grid({
  fontFamily: "RedHat",
  bg: "primary.rose-50",
  display: "grid",
  padding: {
    base: "2rem",
    sm: "5rem",
  },
  gap: "2rem",
  gridTemplateColumns: {
    base: "1",
    sm: "2fr 1fr",
  },
  "& .product-list .product-list-container": {
    paddingTop: "1rem",
    display: "grid",
    gap: "1.5rem",
    gridTemplateColumns: {
      base: "1",
      sm: "repeat(1, minmax(0, 1fr))",
      md: "repeat(2, minmax(0, 1fr))",
      lg: "repeat(3, minmax(0, 1fr))",
    },
  },
  "& .cart": {
    padding: "1rem",
    bg: "white",
    height:'fit'
  },
});

export const card = css({
  display: "flex",
  flexDir: "column",
  gap: "2rem",

  "& .text-container": {
    "& .category": {
      color: "primary.rose-400",
    },
    "& .name": {},
    "& .price": {
      color: "accent.red-cart",
    },
  },
});

export const imageContainer = css({
  position: "relative",
  width: "100%",
  "& img": {
    aspectRatio: {
      base: "1/0.7",
      sm: "square",
    },
    width: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },
});

export const inputContainer = css({
  position: "absolute",
  bottom: "0",
  left: "50%",
  transform: "translate(-50%, 50%)",
  minW:'150px',
  w:'max-content',
  "& .input": {
    // display: "none",
    display: "flex",
    borderRadius: "50px",
    border: "solid 1px",
    borderColor: "accent.red-cart",
    bg: "accent.red-cart",
    width: "full",
    height: "full",
    fontWeight: "500",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    paddingX:'1rem',
    paddingY:'0.7rem',
    "& a": {
      borderRadius: "full",
      p: "4px",
      cursor: "pointer",
      border: "1px solid white",

      _hover: {
        bg: "white",
        "& svg": {
          fill: "accent.red-cart",
        },
      },
    },
    "& input": {
      bg: "transparent",
      w: "20px",
      textAlign: "center",
      _focus: {
        outline: "none",
      },
    },
  },
  "& button": {
    bg: "white",
    borderRadius: "50px",
    border: "solid 1px",
    borderColor: "primary.rose-400",
    display: "inline-flex",
    width: "full",
    height: "full",
    fontWeight: "500",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    cursor: "pointer",
    paddingX:'1.4rem',
    paddingY:'0.7rem',
    _hover: {
      borderColor: "accent.red-cart",
    },
  },
  "& .input.hide": {
    display: "none",
  },
  "& .input.show": {
    display: "flex",
  },
  "& button.hide": {
    display: "none",
  },
  "& button.show": {
    display: "inline-flex",
  },
});
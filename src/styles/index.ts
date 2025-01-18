import { css } from "@styled-system/css";
import { grid } from "@styled-system/patterns";

export const main = css({
  minHeight: "100vh",
  position: "relative",
  bg: "#a0e9ff",
  background: "linear-gradient(0deg, #a0e9ff 0%, #a8f0ff 50%, #c6f5ff 100%)",
  fontFamily: "RedHat",
  opacity: 1,
});

export const wrapperMain = css({
  padding: "4",
  width: {
    base: "",
    md: "80%",
  },
  margin: "0 auto",
});

export const header = css({
  display: "flex",
  marginBottom: "8",
  w: "full",
  alignItems: "center",
  textAlign: {
    base: "center",
    md: "left",
  },
  gap: "8",
  flexDirection: {
    base: "column",
    md: "row",
  },
  "& h1": {
    fontSize: "6xl",
    fontWeight: "bold",
    flex: "1",
    color: "#040104",
  },
});

export const listProyects = grid({
  columns: {
    sm: 1,
    md: 3,
    lg: 3,
    xl: 3,
  },
  gap: "4",
});

export const social = css({
  display: "flex",
  w: "max",
  gap: "4",
  px: "4",
  py: "2",
  borderRadius: "8px",
  bg: "rgba(255,255,255,0.8)",
  backdropFilter: "blur(11px)",
  border: "1px solid rgba(255,255,255,0.25)",
  "& a": {
    transition: "0.2s ease-in-out",
    _hover: { scale: "1.2" },
  },
});

export const attribution = css({
  w:'full',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  paddingTop: "2rem",
  bottom: "0",
  left: "0",
  textAlign: "center",
  width: "100%",
  "& a": {
    color: "tomato",
  },
});

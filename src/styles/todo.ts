import { css } from "@styled-system/css";

export const main = css({
  minH: "100vh",
  display: "flex",
  justifyContent: "center",
  color: "text.todo.primary",
  fontFamily: "Josefin",
  fontWeight: {
    _dark: "light",
  },
  backgroundImage: {
    base: {
      _dark: 'url("/todo/bg-mobile-dark.jpg")',
      _light: 'url("/todo/bg-mobile-light.jpg")',
    },
    md: {
      _dark: 'url("/todo/bg-desktop-dark.jpg")',
      _light: 'url("/todo/bg-desktop-light.jpg")',
    },
  },
  bgColor: "background.todo",
  bgRepeat: "no-repeat",
  bgPosition: "top",
  bgSize: "contain",
  fontSize: {
    base: "0.8rem",
    md:"1rem",
  }
});
//Header classes
export const header = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& h2": {
    textTransform: "uppercase",
    letterSpacing: "1rem",
    my: "1.5rem",
    fontSize: {
      base: "2rem",
      md:"2.5rem",
    },
    fontWeight: "bold",
    color: "white",
  },
});
//footer classes
export const footer = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: {
    base: "2rem",
    md: "0",
  },
  fontSize: {
    base: "0.7rem",
    md: "0.9rem",
  },
  color: "text.todo.secondary",
});
//Wrapper of created tasks container
export const listWrapper = css({
  w: {
    base: "85%",
    md: "40%",
  },
  h: "100%",
  py: "1rem",
});
//Wrapper of tasks container
export const wrapper = css({
  mb: "1.5rem",
  borderRadius: "5px",
  overflow: "hidden",
  shadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
});
//Css for all task items (Created and input for new task)
export const task = css({
  py: "1rem",
  px: "1rem",
  gap: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  bg: "neutral.todo",
  '& input[type="checkbox"]': {
    cursor: "pointer",
    display: "none",
    "&:checked + .checkIcon": {
      background: "linear-gradient(90deg, #57ddff, #c058f3)",
      backgroundRepeat: "no-repeat",
      border: "none", // Eliminamos el borde que podría interferir visualmente
    },
    "&:checked + .checkIcon::after": {
      display: "block",
    },
  },
  "& .checkIcon": {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "22px",
    height: "22px",
    border: "1px solid rgba(119, 122, 146, 0.4)",
    borderRadius: "50%",
    cursor: "pointer",
    backgroundColor: "transparent",
    transition: "background-color 0.3s ease, border-color 0.3s ease",
    "&::after": {
      content: `""`,
      display: "none",
      width: "11px",
      height: "9px",
      backgroundImage:
        'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="11" height="9"%3E%3Cpath fill="none" stroke="%23FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/%3E%3C/svg%3E\')',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
  '& input[type="text"]': {
    flex: "1",
    bg: "transparent",
  },
  "& span": {
    flex: "1",
    bg: "transparent",
    lineHeight: "normal",
    h: "full",
  },
  "& .completed": {
    opacity: "0.4",
    textDecoration: "line-through",
  },
});
//Css only for created tasks
export const list = css({
  "& .task": {
    borderColor: "text.todo.secondary/40",
    borderBottom: "1px solid",
  },
  "& .task:hover": {
    "& button": {
      display: "block",
    },
  },
  "& span": {
    cursor: "grab",
  },
  '& input[type="checkbox"]': {
    display: "none",
  },
});
//list footer classes
export const listFooter = css({
  "&.list-mobile":{
    borderRadius:'5px',
    display:'flex',
    justifyContent:'center',
    fontSize:'0.8rem',
  },
  fontSize: {
    base: "0.7rem",
    md: "0.9rem",
  },
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: "bold",
  py: "0.8rem",
  px: "1rem",
  gap: "1rem",
  color: "text.todo.secondary",
  bgColor: "neutral.todo",
  "& .filter": {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
    "& label:hover ": {
      color: {
        _dark: "hsl(236, 33%, 92%)",
        _light: "#484b6a",
      },
      cursor: "pointer",
    },
  },
  "& button:hover ": {
    color: {
      _dark: "hsl(236, 33%, 92%)",
      _light: "#484b6a",
    },
    cursor: "pointer",
  },
  '& input[type="radio"]': {
    appearance: "none",
  },
  '& input[type="radio"]:checked + label ': {
    color: "primary.todo",
  },
});
//Icon to delete task
export const deleteBtn = css({
  display: "none",
  cursor: "pointer",
});

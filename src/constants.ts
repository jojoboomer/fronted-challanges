export interface Project {
  title: string;
  level?: string;
  img?: string;
  tech?: Tech[];
  link?: string;
  description?: string;
  active: boolean;
}
export type Tech = {
  name: string;
  bg: string;
  color: string;
};
interface TechCollection {
  html: Tech;
  css: Tech;
  js: Tech;
  astro: Tech;
  react: Tech;
  panda: Tech;
}
const Tech: TechCollection = {
  html: { name: "HTML", bg: "#DE4B25", color: "#030303" },
  css: { name: "CSS", bg: "#6B399C", color: "#f9f9f9" },
  js: { name: "JavaScript", bg: "#F7E025", color: "#030303" },
  astro: { name: "Astro", bg: "#17191E", color: "#f9f9f9" },
  react: { name: "React", bg: "#55BED5", color: "#030303" },
  panda: { name: "Panda CSS", bg: "#F6E458", color: "#030303" },
};

export const PROJECTS: Project[] = [
  {
    title: "NFT Card Component",
    level: "newbie",
    img: "/nft/desktop-preview.jpg",
    tech: [Tech.astro, Tech.panda],
    link: "./nft-card",
    description: "Simple component using ASTRO + PandaCSS",
    active: true,
  },
  {
    title: "Product list with cart",
    level: "newbie",
    img: "/cart/preview.jpg",
    tech: [Tech.astro, Tech.panda, Tech.react],
    link: "./shoping-cart",
    description:
      "A product page with cart using ASTRO + PandaCSS. Focus on the cart functionality using vanilla JS",
    active: true,
  },
  {
    title: "Sign-up form component",
    level: "junior",
    img: "/singup-component/desktop-preview.jpg",
    tech: [Tech.astro, Tech.panda],
    link: "./singup-component",
    description: "Simple component using ASTRO + PandaCSS",
    active: true,
  },
  {
    title: "Todo app",
    level: "intermediate",
    img: "/todo/desktop-preview.jpg",
    tech: [Tech.astro, Tech.panda, Tech.react],
    link: "./todo",
    description:
      "The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.",
    active: true,
  },
  {
    title: "IP Address Tracker",
    level: "intermediate",
    img: "/tracker/desktop-preview.jpg",
    tech: [Tech.astro, Tech.panda, Tech.react],
    link: "./ip-tracker",
    description:
      "In this challenge, I'll be using two separate APIs together to create an IP Address Tracking app.",
    active: true,
  },
];

export const IP_API_URL = "https://geo.ipify.org/api/v2/"
// apiKey
// ipAddress
// domain
// email
// escapedUnicode

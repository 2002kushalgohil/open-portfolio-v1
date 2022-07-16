export const fullStack = "Full Stack";
export const uiDevelopment = "UI Development";
export const webDesign = "Web Design";

export const category = [fullStack, uiDevelopment, webDesign];

export default [
  // ------------------- Full Stack -------------------
  {
    name: "Expense Tracker",
    imgSrc: "/Projects/expense tracker.jpg",
    category: fullStack,
    stack: ["NextJS", "NodeJS", "NestJS", "MongoDB"],
    liveLink: "http://www.kushalgohil.com",
  },
  {
    name: "Google Keep",
    imgSrc: "/Projects/google keep.jpg",
    category: fullStack,
    stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    liveLink: "http://www.kushalgohil.com",
  },

  // ------------------- UI Development -------------------
  {
    name: "Headphone UI",
    imgSrc: "/Projects/demo.png",
    category: uiDevelopment,
    stack: ["NextJS", "TailwindCSS"],
    liveLink: "http://www.kushalgohil.com",
  },
  {
    name: "Restaurant UI",
    imgSrc: "/Projects/Restaurant UI.jpg",
    category: uiDevelopment,
    stack: ["NextJS", "Custom CSS"],
    liveLink: "http://www.kushalgohil.com",

    // ------------------- Web Design -------------------
  },
  {
    name: "Restaurant Design",
    imgSrc: "/Projects/Restaurant Design.png",
    category: webDesign,
    stack: ["Figma"],
    liveLink: "http://www.kushalgohil.com",
  },
  {
    name: "Footware Design",
    imgSrc: "/Projects/Footware Design.jpg",
    category: webDesign,
    stack: ["Figma"],
    liveLink: "http://www.kushalgohil.com",
  },
];

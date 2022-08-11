export const fullStack = "Full Stack";
export const uiDevelopment = "UI Development";
export const webDesign = "Web Design";

export const category = [fullStack, uiDevelopment, , webDesign];

export default [
  // ------------------- Full Stack -------------------
  {
    name: "Google Keep Clone",
    imgSrc: "/Projects/Full Stack/google keep.webp",
    category: fullStack,
    stack: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB"],
    liveLink: "https://google-keep--clone.herokuapp.com",
  },

  // ------------------- UI Development -------------------
  {
    name: "Headphone Website",
    imgSrc: "/Projects/Website UI Development/Headphone Website.webp",
    category: uiDevelopment,
    stack: ["NextJS", "TailwindCSS"],
    liveLink: "https://beats.kushalgohil.com",
  },
  {
    name: "Bridged Media Landing Page",
    imgSrc: "/Projects/Website UI Development/Bridged Media.webp",
    category: uiDevelopment,
    stack: ["NextJS", "TailwindCSS"],
    liveLink: "https://bridged.media",
  },

  // ------------------- Web Design -------------------
  {
    name: "Ghughrawala's Landing Page",
    imgSrc: "/Projects/Website Design/Ghughrawa wala.webp",
    category: webDesign,
    stack: ["Figma"],
    liveLink:
      "https://www.figma.com/file/TdeoGExFWhxg5fTmEFmuR9/Untitled?node-id=0%3A1",
  },
];

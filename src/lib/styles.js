export const widths = {
  main: ['100%', '70vw', '70vw', '75vw'],
  sidebar: ['100%', '30vw', '30vw', '25vw'],
};

const imageWidth = 300;
const imageHeight = 160;
const imagesVisible = 3.4;

export const mobileSidebarImageWidth = `${(10 / imagesVisible) * 10}vw`;
export const mobileSidebarHeight = `calc(${(imageHeight /
  (imageWidth * imagesVisible)) *
  100}vw + 14px)`;

export const widths = {
  main: ['100%', '70vw', '70vw', '75vw'],
  sidebar: ['100%', '30vw', '30vw', '25vw'],
};

const imageWidth = 300;
const imageHeight = 160;
const imagesVisible = 2.75;

export const mobileSidebarImageWidth = `${(10 / imagesVisible) * 10}vw`;

export const mobileSidebarVW = `${(imageHeight / (imageWidth * imagesVisible)) *
  100}vw`;

export const mobileSidebarHeight = `calc(${mobileSidebarVW} + 24px)`;

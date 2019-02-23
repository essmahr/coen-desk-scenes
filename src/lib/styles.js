const goldenRatio = 1.618;

export const breakpoints = [576, 768, 992, 1200];

export const mediaQueries = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
);

export const headerHeight = '2rem';

export const mainContainer = `
  padding-left: 4vw;
  padding-right: 4vw;
`;

export const sidebarWidths = [
  '100%',
  `${45 / goldenRatio}vw`,
  null,
  `${40 / goldenRatio}vw`,
];

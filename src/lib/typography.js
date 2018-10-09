import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '20px',
  baseLineHeight: 1.666,
  headerFontFamily: ['IBM Plex Sans', 'sans-serif'],
  headerWeight: 400,
  bodyFontFamily: ['Georgia', 'serif'],
  googleFonts: [
    {
      name: 'IBM Plex Sans Condensed',
      styles: ['400', '300'],
    },
    {
      name: 'IBM Plex Sans',
      styles: ['400', '300'],
    },
  ],
  overrideStyles: () => {
    return {
      body: {
        backgroundColor: '#000',
        color: '#fff',
      },
    };
  },
});

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;

import React from 'react';

const baseUrl = process.env.GATSBY_BASE_URL;

export default ({ image }) => {
  const { src, width, height } = image;
  return (
    <>
      <meta name="og:image" content={baseUrl + src} />
      <meta name="og:image:width" content={width} />
      <meta name="og:image:height" content={height} />
      <meta name="twitter:image" content={baseUrl + src} />
    </>
  );
};

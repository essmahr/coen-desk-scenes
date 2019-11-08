const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'localhost:8000'
    : process.env.GATSBY_BASE_URL;

const defaultMetaImage = {
  src: '/og-image.png',
  width: 1200,
  height: 630,
};

export default (image = defaultMetaImage) => {
  const { src, width, height } = image;

  const imageUrl = `https://${baseUrl}${src}`;

  return [
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:width', content: width },
    { property: 'og:image:height', content: height },
    { name: 'twitter:image', content: imageUrl },
  ];
};

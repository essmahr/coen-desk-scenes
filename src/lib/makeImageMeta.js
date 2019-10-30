const baseUrl = process.env.GATSBY_BASE_URL;

export default image => {
  const { src, width, height } = image;

  const imageUrl = `https://${baseUrl}${src}`;

  return [
    { property: 'og:image', content: imageUrl },
    { property: 'og:image:width', content: width },
    { property: 'og:image:height', content: height },
    { name: 'twitter:image', content: imageUrl },
  ];
};

const path = require('path');
const fs = require('fs');

const IMAGE_EXT = '.jpeg';
const PWD = process.env.PWD;

const imagesDir = path.join(PWD, 'src', 'images');
const scenesJson = path.join(PWD, 'src', 'data', 'scenes.json');

const imageJson = fs
  .readdirSync(imagesDir)
  .filter(file => path.extname(file) === IMAGE_EXT)
  .map(file => {
    const [film, timestamp] = file.slice(0, -1 * IMAGE_EXT.length).split('_');
    return {
      film,
      timestamp: timestamp.split('.').join(':'),
    };
  });

fs.writeFileSync(scenesJson, JSON.stringify(imageJson, null, 2));

const path = require('path');
const fs = require('fs');

const IMAGE_EXT = '.jpeg';
const DEFAULT_FIELD_KEYS = ['quote'];
const DUMMY_QUOTE =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione libero architecto eos ipsam repudiandae minus';

const defaultFields = DEFAULT_FIELD_KEYS.reduce((o, k) => {
  o[k] = DUMMY_QUOTE;
  return o;
}, {});

const PWD = process.env.PWD;

const imagesDir = path.join(PWD, 'src', 'images');
const scenesPath = path.join(PWD, 'src', 'data', 'scenes.json');

const scenesJson = JSON.parse(fs.readFileSync(scenesPath));

const imageJson = fs
  .readdirSync(imagesDir)
  .filter(file => path.extname(file) === IMAGE_EXT)
  .map(file => {
    const [film, timestampStr] = file
      .slice(0, -1 * IMAGE_EXT.length)
      .split('_');
    const timestamp = timestampStr.split('.').join(':');

    const found = scenesJson.find(
      ({ film: searchFilm, timestamp: searchTimeStamp }) => {
        return timestamp === searchTimeStamp && searchFilm === film;
      }
    );

    if (found) {
      DEFAULT_FIELD_KEYS.forEach(field => {
        if (!found[field] || found[field] === DUMMY_QUOTE) {
          console.log(`${film} / ${timestamp} is missing ${field}!`);
        }
      });

      return {
        ...defaultFields,
        ...found,
        film,
        timestamp,
      };
    }

    console.log(`adding new scene: ${film} / ${timestamp}`);

    return {
      ...defaultFields,
      film,
      timestamp,
    };
  });

fs.writeFileSync(scenesPath, JSON.stringify(imageJson, null, 2));

import scenes from './scenes';

const actorKeys = ['actor', 'imdbId'];

it.each(scenes)('has all the keys', scene => {
  actorKeys.forEach(key => {
    expect(scene).toHaveProperty(key);
  });
});

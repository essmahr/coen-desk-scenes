const getNextScene = function(scenes, index) {
  if (index === scenes.length - 1) {
    return scenes[0];
  }

  return scenes[index + 1];
};

const getPreviousScene = function(scenes, index) {
  if (index === 0) {
    return scenes[scenes.length - 1];
  }

  return scenes[index - 1];
};

module.exports = {
  getNextScene,
  getPreviousScene,
};

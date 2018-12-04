// @flow

export type Thumbnail = {
  childImageSharp: {
    small: {
      src: string,
    },
  },
};

export type Film = {
  title: string,

  slug: string,

  year: number,

  scenes: Array<Scene>,
};

export type FilmsJson = {
  edges: Array<{
    node: Film,
  }>,
};

export type SceneGroup = {
  fieldValue: string,

  edges: Array<{
    node: Scene,
  }>,
};

export type ScenesJson = {
  group: Array<SceneGroup>,
};

export type Scene = {
  id: string,

  timestamp: string,

  film: Film,

  fields: {
    thumbnail: Thumbnail,
  },
};

// @flow

export type PageContext = {
  id: String,
  timestamp: String,
  film: String,
  index: Number,
  pagination: {
    previous: String,
    next: String,
  },
};

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

export type Scene = {
  id: string,
  timestamp: string,
  film: Film,
  quote: string,
  actor: string,
  imdbId: string,
};

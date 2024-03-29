// @flow
import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Flipper } from 'react-flip-toolkit';

import { type Film } from '../../types';

import Sidebar from './Sidebar';

type Props = {
  films: Array<Film>,
  currentSceneId: ?string,
};

const query = graphql`
  {
    allFilm(sort: { fields: year }) {
      nodes {
        title
        slug
        year
        scenes {
          ...Scene_thumbnail
        }
      }
    }
  }
`;

const SidebarContainer = (props: Props) => {
  const [filmsMode, setFilmsMode] = useState(false);

  return (
    <StaticQuery
      query={query}
      render={data => (
        <Flipper flipKey={filmsMode}>
          <Sidebar
            onModeToggle={() => setFilmsMode(fm => !fm)}
            filmsMode={filmsMode}
            films={data.allFilm.nodes}
          />
        </Flipper>
      )}
    />
  );
};

export default SidebarContainer;

// @flow
import * as React from 'react';
import Helmet from 'react-helmet';

import assembleData from './lib/assembleData';

import { type ScenesJson, type FilmsJson, type Scene } from '../types';

import Main from './components/main/Main';
import SidebarContainer from './components/sidebar/SidebarContainer';

import './app.css';

type Props = {
  data: {
    allFilmsJson: FilmsJson,
    allScenesJson: ScenesJson,
  },
  pageContext: {
    scene: Scene,
  },
  children: React.ChildrenArray<React.Node>,
};

const Layout = ({ data, pageContext, children }: Props) => {
  // const { scene } = pageContext;
  const { films } = assembleData(data);

  return (
    <>
      <Helmet
        title="Coens"
        meta={[
          { name: 'description', content: '' },
          { name: 'keywords', content: '' },
        ]}
      >
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400|IBM+Plex+Sans+Condensed:300,400|IBM+Plex+Sans:300,400|IBM+Plex+Serif:300,400,500,600,700"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i|Libre+Baskerville:400,400i|Sorts+Mill+Goudy:400,400i|Spectral:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
          rel="stylesheet"
        />

        <html lang="en" />
      </Helmet>
      <Main>{children}</Main>
      <SidebarContainer films={films} />
    </>
  );
};

export default Layout;

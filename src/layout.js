// @flow
import React from 'react';
import Helmet from 'react-helmet';

import Main from './components/main/Main';
import MiniHeader from './components/MiniHeader';
import KeyboardNav from './components/KeyboardNav';
import SidebarContainer from './components/sidebar/SidebarContainer';
import SceneContext from './lib/context';
import './app.css';

type Props = {
  children: React.ChildrenArray<React.Node>,
  location: {
    pathname: string,
  },
  pageContext: {
    index?: number,
    id?: string,
  },
};

const Layout = ({ children, location, pageContext }: Props) => {
  const { index = null, id = null } = pageContext;

  return (
    <>
      <Helmet
        title="Every character actor behind a desk in a Coen Brothers film"
        meta={[
          {
            name: 'description',
            content:
              'Every character actor behind a desk in a Coen Brothers film. Dot com.',
          },
        ]}
      >
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400|IBM+Plex+Sans+Condensed:500,600|IBM+Plex+Sans:400,500,600|IBM+Plex+Serif:600,400,400i"
          rel="stylesheet"
        />

        <html lang="en" />
      </Helmet>
      <KeyboardNav pagination={pageContext.pagination} />
      <MiniHeader visible={location.pathname !== '/'} />
      <Main location={location.pathname} sceneIndex={index}>
        {children}
      </Main>
      <SceneContext.Provider value={id}>
        <SidebarContainer />
      </SceneContext.Provider>
    </>
  );
};

export default Layout;

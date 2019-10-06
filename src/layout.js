// @flow
import React from 'react';
import Helmet from 'react-helmet';

import Main from './components/main/Main';
import MiniHeader from './components/MiniHeader';
import KeyboardNav from './components/KeyboardNav';
import SidebarContainer from './components/sidebar/SidebarContainer';
import Context from './lib/context';
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
          { name: 'description', content: '' },
          { name: 'keywords', content: '' },
        ]}
      >
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400|IBM+Plex+Sans+Condensed:300,400,500,600,700|IBM+Plex+Sans:300,400,500,600|IBM+Plex+Serif:300,400,500,600,700,300i,400i,500i,600i,700i"
          rel="stylesheet"
        />

        <html lang="en" />
      </Helmet>
      <KeyboardNav pagination={pageContext.pagination} />
      <MiniHeader visible={location.pathname !== '/'} />
      <Main location={location.pathname} sceneIndex={index}>
        {children}
      </Main>
      <Context.Provider value={id}>
        <SidebarContainer />
      </Context.Provider>
    </>
  );
};

export default Layout;

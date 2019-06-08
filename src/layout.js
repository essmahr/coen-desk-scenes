// @flow
import * as React from 'react';
import Helmet from 'react-helmet';

import Main from './components/main/Main';
import MiniHeader from './components/MiniHeader';
import SidebarQuery from './components/sidebar/SidebarQuery';
import SidebarContainer from './components/sidebar/SidebarContainer';

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
        title="Coens"
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
      <MiniHeader visible={location.pathname !== '/'} />
      <Main location={location.pathname} sceneIndex={index}>
        {children}
      </Main>
      <SidebarQuery
        render={films => <SidebarContainer films={films} sceneId={id} />}
      />
    </>
  );
};

export default Layout;

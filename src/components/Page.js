// @flow
import * as React from 'react';
import Helmet from 'react-helmet';

import '../app.css';

type Props = {
  children: React.ChildrenArray<React.Node>,
};

const Layout = ({ children }: Props) => (
  <>
    <Helmet
      title="Title"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300,400|IBM+Plex+Sans+Condensed:300,400|IBM+Plex+Sans:300,400|IBM+Plex+Serif:300,400"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i|Libre+Baskerville:400,400i|Sorts+Mill+Goudy:400,400i|Spectral:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
        rel="stylesheet"
      />

      <html lang="en" />
    </Helmet>
    {children}
  </>
);

export default Layout;

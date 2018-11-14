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
      <html lang="en" />
    </Helmet>
    {children}
  </>
);

export default Layout;

// @flow
import * as React from 'react';
import Helmet from 'react-helmet';

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
      <html lang="en" />
    </Helmet>
    {children}
  </>
);

export default Layout;

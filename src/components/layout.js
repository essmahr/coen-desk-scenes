import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './header';

const Layout = ({ children }) => (
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
    <Header />
    <div>{children}</div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

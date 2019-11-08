// @flow
import React from 'react';
import Helmet from 'react-helmet';

import makeImageMeta from '../lib/makeImageMeta';
import Lander from '../components/main/Lander';

type Props = {};

const IndexPage = (props: Props) => {
  return (
    <>
      <Helmet meta={makeImageMeta()} />
      <Lander />
    </>
  );
};

export default IndexPage;

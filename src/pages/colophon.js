// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { Text, Heading } from 'rebass';
import ContentPanel from '../components/main/ContentPanel';
import TextPane from '../components/main/TextPane';
import { textSecondary } from '../colors';

const Tblank = props => (
  <a target="_blank" rel="noopener noreferrer" {...props} />
);

const ColophonPate = () => (
  <ContentPanel>
    <Helmet title="Colophon" />
    <TextPane>
      <Text fontSize={[1, 1]}>
        <p>
          This site is built with{' '}
          <Tblank href="https://www.gatsbyjs.org/">Gatsby.js</Tblank> and hosted
          on <Tblank href="https://www.netlify.com">Netlify</Tblank>.
        </p>
        <p>
          The type is set in the{' '}
          <Tblank href="https://fonts.google.com/specimen/IBM+Plex+Sans">
            IBM Plex
          </Tblank>{' '}
          family of fonts, designed by IBM.
        </p>
        <p>
          The UI is built with the help of{' '}
          <Tblank href="https://www.react-spring.io/">React-Spring</Tblank>,{' '}
          <Tblank href="https://github.com/aholachek/react-flip-toolkit">
            React Flip Toolkit
          </Tblank>{' '}
          by <a href="https://github.com/aholachek">Alex Holacheck</a>, and
          styled with help from{' '}
          <Tblank href="https://github.com/emotion-js/emotion">Emotion</Tblank>{' '}
          &amp;{' '}
          <Tblank
            href="https://rebassjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rebass
          </Tblank>
          .
        </p>
        <p>
          The source code is available on{' '}
          <Tblank href="https://github.com/essmahr/coen-desk-scenes">
            Github
          </Tblank>
          .
        </p>
      </Text>
    </TextPane>
  </ContentPanel>
);

export default ColophonPate;

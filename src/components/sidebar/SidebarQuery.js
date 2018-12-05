// @flow
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import SidebarContainer from './SidebarContainer';
import assembleData from '../../lib/assembleData';

const query = graphql`
  {
    allFilmsJson(sort: { fields: [year], order: ASC }) {
      edges {
        node {
          slug
          title
          year
        }
      }
    }
    allScenesJson(sort: { fields: [timestamp], order: ASC }) {
      group(field: film) {
        fieldValue
        edges {
          node {
            ...Scene_thumbnail
          }
        }
      }
    }
  }
`;

export default () => (
  <StaticQuery
    query={query}
    render={data => {
      const { films } = assembleData(data);

      return <SidebarContainer films={films} />;
    }}
  />
);

// @flow
import React, { Component } from 'react';
import { graphql } from 'gatsby';
import { navigate } from 'gatsby-link';

import ScenePanel from '../components/main/ScenePanel/ScenePanel';

type Props = {
  data: Object,
  pageContext: {
    pagination: {
      next: String,
      previous: String,
    },
  },
};

class ScenePage extends Component<Props> {
  componentDidMount = () => {
    // TODO: throttle
    document.addEventListener('keydown', this.handleKeyDown);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = (event: Object) => {
    const { previous, next } = this.props.pageContext.pagination;
    switch (event.keyCode) {
      case 27:
        navigate('/');
        break;
      case 37:
      case 48:
        navigate(previous);
        break;
      case 39:
      case 40:
        navigate(next);
        break;
      default:
        return;
    }
  };

  render() {
    const { scenesJson, filmsJson } = this.props.data;

    return <ScenePanel scene={scenesJson} film={filmsJson} />;
  }
}

export default ScenePage;

export const query = graphql`
  fragment SceneMain on ScenesJson {
    timestamp
    film
    actor
    imdbId
    multiple
    fields {
      image {
        childImageSharp {
          fluid(maxWidth: 540, quality: 90) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      formattedQuote
    }
  }

  query($film: String!, $timestamp: String!) {
    scenesJson(film: { eq: $film }, timestamp: { eq: $timestamp }) {
      ...SceneMain
    }
    filmsJson(slug: { eq: $film }) {
      title
      year
    }
  }
`;

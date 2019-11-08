// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { Text, Heading } from 'rebass';
import ContentPanel from '../components/main/ContentPanel';
import TextPane from '../components/main/TextPane';
import BorderedLink from '../components/BorderedLink';
import makeImageMeta from '../lib/makeImageMeta';

const tarantinoLink = 'https://www.youtube.com/watch?v=V_whQnqwEYk';
const bayLink = 'https://www.youtube.com/watch?v=2THVvshvq0Q';
const andersonLink = 'https://vimeo.com/89302848';

const AboutPage = () => (
  <ContentPanel>
    <Helmet title="About" meta={makeImageMeta()} />
    <TextPane>
      <Heading
        fontSize={4}
        lineHeight="1.3"
        fontWeight={400}
        fontFamily="serif"
      >
        About
      </Heading>
      <Text fontSize={[1, 1]}>
        <p>
          Like many, I'm a big fan of the films of the Coen Brothers. I love the
          ease with which they bounce between weighty cinematic masterpieces,
          arty slow-burners, and frivolous comedies. They play within and
          against genre so effortlessly, and there is obvious glee behind every
          line of dialogue and every plot twist.
        </p>
        <p>
          It's also clear they have a deep love and respect for the character
          actor. Alongside their long-time casting director Ellen Chenoweth, the
          Coens pepper every film with unforgettable performances by actors
          we've (mostly) never heard of. And often, I've come to notice, these
          character actors show up behind desks.
        </p>
        <p>
          They usually appear as clerks or administrators, indifferent faces of
          a higher bureaucratic power, thwarting the goals of an increasingly
          frustrated or desperate protagonist. Other times, they're puzzled
          bystanders, pulled in to a web of cause and effect they barely
          comprehend. And sometimes they're pure comic relief. But they are
          always so pitch-perfect, so distinct and authentic, it's hard to
          conceive of these actors in any other role.
        </p>
        <p>
          Like Tarantino's{' '}
          <a href={tarantinoLink} target="_blank" rel="noopener noreferrer">
            trunk shots
          </a>{' '}
          or Wes Anderson's{' '}
          <a href={andersonLink} target="_blank" rel="noopener noreferrer">
            symmetry
          </a>{' '}
          (or Michael Bay's{' '}
          <a href={bayLink} target="_blank" rel="noopener noreferrer">
            low-angle 360s
          </a>
          ), I would argue that the character actor behind a desk is a Coen
          Brothers signature. This is my attempt to document them all.
        </p>
        <Text fontFamily="serif" color="textSecondary">
          <p>
            <small css={{ fontStyle: 'italic' }}>
              <strong>Disclaimer:</strong> some of these actors are perhaps not
              actually character actors, and some of these desks are perhaps not
              actually desks. Please forgive me.
            </small>
          </p>
          <p>
            <small css={{ fontStyle: 'italic' }}>
              <strong>Also:</strong> I am happy to go on and on to anyone who
              will listen about the rest of the Coen Brothers character-actor
              scenes that do NOT involve desks. Who can forget the{' '}
              <a
                href="https://www.youtube.com/watch?v=x-XEHwUBubk"
                target="_blank"
                rel="noopener noreferrer"
              >
                "kinda funny-looking"
              </a>{' '}
              guy from Fargo? My personal favourites are{' '}
              <a
                href="https://www.youtube.com/watch?v=6M0Bhk5i1lM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jackie Treehorn
              </a>{' '}
              in The <em>Big Lebowski</em> and the{' '}
              <a href="https://www.youtube.com/watch?v=8YQZMbgpmIo">
                ensemble of communists
              </a>{' '}
              in <em>Hail, Caesar!</em> So good.
            </small>
          </p>
          <p>
            <BorderedLink to="/colophon">Colophon</BorderedLink>
          </p>
        </Text>
      </Text>
    </TextPane>
  </ContentPanel>
);

export default AboutPage;

import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React from 'react';
import SEO from '../components/SEO';
// GatsbyImage while importing the name is GatsbyImage not Img

export default function SlicemasterPage({ data: { person } }) {
  return (
    <>
      <SEO title={person.name} image={person.image.asset.fluid} />
      <div className="center">
        <GatsbyImage fluid={person.image.asset.fluid} />
        <h2>
          <span className="mark">{person.name}</span>
        </h2>
        <p>{person.description}</p>
      </div>
    </>
  );
}

export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;

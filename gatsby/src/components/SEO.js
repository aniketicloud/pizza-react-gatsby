import React from 'react'
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from 'gatsby';

export default function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          twitter
        }
      }
    }
  `)
  return (
    <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      {/* Fav Icons */}
      {/* svg favicon not working for self closing link tag like <link /> */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
      <link rel="alternate icon" href="/favicon.ico"></link>

      {/* Meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <meta charset="utf-8"></meta>
      <meta name="description" content={site.siteMetadata.description} ></meta>
      
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} ></meta>}
      <meta property="og:image" content={image || '/logo.svg'}></meta>
      <meta property="og:title" content={title} key="ogtitle"></meta>
      <meta property="og:site_name" content={site.siteMetadata.title} key="ogsitename"></meta>
      <meta property="og:description" content={description} key="ogdesc"></meta>
      {children}
    </Helmet>
  )
}
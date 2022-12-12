import { graphql } from 'gatsby'
import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import options from '../script/bodyRaw'

export default function tryby({data}) {
  const content = data.contentfulTryby

  console.log(data)
  return (
    <div>
       {content.title}

       <img src={content.image.url} alt="" />

       {content.body && renderRichText(content.body, options)}

    </div>
  )
}

export const query = graphql`
query MyQuery ($slug: String) {
    contentfulTryby(slug: {eq: $slug}) {
      title
      tag
      updatedAt
      image {
        url
      }
      createdAt
      body {
        raw
      }
    }
  }
`

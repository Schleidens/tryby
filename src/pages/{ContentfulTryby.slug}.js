import { graphql } from 'gatsby'
import React from 'react'

export default function tryby({data}) {
  const content = data.contentfulTryby
  console.log(data)
  return (
    <div>
       {content.title}
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

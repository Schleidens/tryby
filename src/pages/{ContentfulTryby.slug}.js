import { graphql } from 'gatsby'
import React from 'react'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from '../layout/layout'
import options from '../script/bodyRaw'
import BlogView from '../component/blogView'

export default function tryby({data}) {
  const content = data.contentfulTryby

  return (
    <Layout>
        <div>

          <BlogView 
          date={content.updatedAt} 
          title={content.title} 
          img={content.image.url} 
          content={content.body && renderRichText(content.body, options)} 
          >

            {content.tag.map((tags, index) => (
              <span key={index} className="tag">
                {`#${tags}`}
              </span>
            ))}
          </BlogView>

        </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery ($slug: String) {
    contentfulTryby(slug: {eq: $slug}) {
      title
      tag
      updatedAt(formatString: "dddd DD MMMM YYYY")
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

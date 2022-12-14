import { graphql } from "gatsby"
import * as React from "react"

import Layout from "../layout/layout";
import Header from "../component/header";
import Blog from "../component/blog";

const IndexPage = ({ data }) => {

  const { nodes } = data.allContentfulTryby;
  const blogpost = nodes;

  return (
    <>
    <Layout>
      <Header />
        <main className="blog__section">


        {blogpost.map((blog) => (
            <Blog key={blog.id} img={blog.image.url} slug={blog.slug} title={blog.title} date={blog.createdAt} />
          ))}
        </main>
    </Layout>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const blogpost = graphql`
query MyQuery {
  allContentfulTryby {
    nodes {
      createdAt(formatString: "dddd DD MMMM YYYY")
      title
      id
      image {
        url
      }
      slug
    }
  }
}
`

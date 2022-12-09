import { graphql } from "gatsby"
import * as React from "react"

const IndexPage = ({ data }) => {

  const { allContentfulTryby } = data;
  const blogpost = allContentfulTryby.nodes;
  console.log(blogpost);
  return (
    <>
     <main>
      {blogpost.map(blog => (
        <div key={blog.id}>
          <div>{blog.title}</div>
          <div>{blog.date}</div>
          {blog.tag.map(tag => (
            <div>{tag}</div>
          ))}
          <img src={blog.image.url} alt="" />
        </div>
      ))}
     </main>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const blogpost = graphql`
query MyQuery {
  allFile {
    nodes {
      relativePath
    }
  }
  allContentfulTryby {
    nodes {
      createdAt
      date
      tag
      title
      id
      image {
        id
        url
      }
    }
  }
}
`

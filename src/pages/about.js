import React from 'react'
import Layout from '../layout/layout'

export default function about() {

  const bar = "//"
  
  return (
    <div>
        <Layout>
            <div className="about">
              <p>
              <span className="mark">TRYBY </span> is a demo blog, built by <a href="https://github.com/Schleidens"><span className='mark'> Schleidens.Dev </span></a> using <span className="mark">Gatsby/Contentful</span>. 
              </p>
              <b>Techno</b>
              <ul>
                <li>
                  <a href="https://www.gatsbyjs.com/">Gatsby</a>
                </li>
                <li>
                  <a href="https://graphql.org/">GraphQl</a>
                </li>
                <li>
                  <a href="https://www.contentful.com/">Contentful</a>
                </li>
                <li>
                  <a href="https://www.gatsbyjs.com/products/cloud/">Gatsby Cloud</a>
                </li>
                <li>
                  <a href="https://sass-lang.com/">Sass</a>
                </li>
              </ul>

              <div className="">
               {bar} <em>This blog follows the jamstack architecture pattern, basically it consits of using a static site generator and a Headless CMS for backend (host and fetch data from)</em>
              </div>
            </div>
        </Layout>
    </div>
  )
}

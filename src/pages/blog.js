import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <>
    <Layout>
      <h1>Latest Posts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        const { id, frontmatter } = node
        const { author, date, title, path } = frontmatter
        return (
          <div key={id}>
            <h3>{title}</h3>
            <small>
              Posted by {author} on {date}
            </small>
            <br />
            <br />
            <Link to={path}>Read More</Link>
            <br />
            <br />
            <hr />
          </div>
        )
      })}
    </Layout>
  </>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
            author
            path
          }
        }
      }
    }
  }
`

export default IndexPage

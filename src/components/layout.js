import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import Menu from "./menu"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Menu />
        <div style={{ paddingLeft: "40px" }}>{children}</div>
      </div>
    )}
  />
)

export default Layout

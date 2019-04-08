import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Sidebar from '../components/sidebar'

import './layout.css'

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
      <div className="container">
        <Sidebar siteTitle={data.site.siteMetadata.title} />
        <div className="children">{children}</div>
      </div>
    )}
  />
)

export default Layout

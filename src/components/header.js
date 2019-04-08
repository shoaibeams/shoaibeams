import { Link } from "gatsby"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="nav">
      <h1>
        <Link to="/" className="logo">
          {siteTitle}
        </Link>
        <Link to="/physics">Physics</Link>
        <Link to="/math">Mathematics</Link>
      </h1>
    </div>
  </header>
)

export default Header

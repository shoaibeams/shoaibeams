import React from 'react'
import { Link } from 'gatsby'
import './sidebar.css'

const Sidebar = ({ siteTitle }) => {
  return (
    <div className="column">
      <div className="logo">
        <img src="dp.jpg" alt="" />
        <Link to="/">
          <h2 id="title">{siteTitle}</h2>
        </Link>
      </div>
      <hr className="hr" />
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/portfolio">Portfolio</Link>
      <div className="social">
        <a href="https://www.linkedin.com/in/shoaib-khalid-408791113/">
          <i className="fab fa-linkedin-in" />
        </a>
        <a href="https://www.facebook.com/shoaibkhalid1996">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="https://github.com/shoaibeams">
          <i className="fab fa-github" />
        </a>
        <a href="https://twitter.com/shoaibkhalid_">
          <i className="fab fa-twitter" />
        </a>
      </div>
    </div>
  )
}

export default Sidebar

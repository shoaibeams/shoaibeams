import React from 'react'
import { Link } from 'gatsby'
import { FaTwitter, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './sidebar.scss'
import dp from '../images/dp.jpg'

const Sidebar = ({ siteTitle }) => {
  return (
    <div className="column">
      <div className="logo">
        <img src={dp} alt="" />
        <Link to="/">
          <h2 id="title">{siteTitle}</h2>
        </Link>
      </div>
      <hr className="hr" />
      <Link to="/blog">Blog </Link>
      <Link to="/contact">Contact</Link>
      <Link to="/portfolio">Portfolio</Link>
      <div className="social">
        <a href="https://www.linkedin.com/in/shoaib-khalid-408791113/">
          <FaLinkedinIn />
        </a>
        <a href="https://www.facebook.com/shoaibkhalid1996">
          <FaFacebookF />
        </a>
        <a href="https://github.com/shoaibeams">
          <FaGithub />
        </a>
        <a href="https://twitter.com/shoaibkhalid_">
          <FaTwitter />
        </a>
      </div>
    </div>
  )
}

export default Sidebar

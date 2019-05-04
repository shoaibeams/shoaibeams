import React from 'react'
import { Link } from 'gatsby'
import {
  FaTwitter,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaExternalLinkAlt
} from 'react-icons/fa'
import './sidebar.scss'
import dp from '../images/dp.jpg'

const Sidebar = ({ siteTitle }) => {
  return (
    <div className="column">
      <div className="logo">
        <Link to="/">
          <img src={dp} alt="Shoaib Khalid" />
        </Link>
        <Link to="/">
          <h1 id="title">{siteTitle}</h1>
        </Link>
      </div>
      <hr className="hr" />

      <Link to="/blog">Blog </Link>
      <Link to="/contact">Contact</Link>
      <Link to="/portfolio">Portfolio</Link>
      
      <a href="shoaib.pdf" target="_blank" className="resume">
        Resume <FaExternalLinkAlt />
      </a>

      <div className="social">
        <a className="lin" href="https://www.linkedin.com/in/shoaib-khalid-408791113/">
          <FaLinkedinIn />
        </a>
        <a className="fb" href="https://www.facebook.com/shoaibkhalid1996">
          <FaFacebookF />
        </a>
        <a className="gh" href="https://github.com/shoaibeams">
          <FaGithub />
        </a>
        <a className="tw" href="https://twitter.com/shoaibkhalid_">
          <FaTwitter />
        </a>
      </div>
    </div>
  )
}

export default Sidebar

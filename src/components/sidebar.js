import React from 'react'
import './sidebar.css'

const Sidebar = ({ siteTitle }) => {
  return (
    <div className="column">
      <div className="logo">
        <img src="forDisplay.jpg" alt="" />
        <h1>{siteTitle}</h1>
      </div>
      <hr className="hr" />
      <div className="row">About</div>
      <div className="row">Blog</div>
      <div className="row">Portfolio</div>
    </div>
  )
}

export default Sidebar

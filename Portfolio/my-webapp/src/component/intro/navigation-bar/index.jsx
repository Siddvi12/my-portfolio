import React from 'react'
import logo from "../../../images/logo.png"
import CallToAction from '../../shared/CallToAction';
import './style.scss';
const Navigation = () => {

  return (
    <div className="top-navigation-bar">
        <div className="app-logo">
            <img src={logo} alt="logo" id='' />
        </div>
        <div className="navigation">
            <span className="navigation-item">Skills</span>
            <span className="navigation-item">Blog & Articals</span>
            <span className="navigation-item">Portfolio</span>
            <CallToAction text ="Contact Me"/>
        </div>
    </div>
  )
}

export default Navigation;
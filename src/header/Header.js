import React from 'react'
import './header.css'

import home from "../../src/home.jpg"

const Header = () => {
  return (
    <div className='header'>
        <div className='headerTitles'>
          <span className='headerTitleSm'>React & Node</span>
          <span className='headerTitleLg'>Photo Albumns</span>
        </div>
        <img className='headerImg' 
          src={home} 
          alt=''/>
    </div>
  )
}

export default Header

//import React from 'react'

import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <nav className='nav-main'>
      <div className="group group-user">
        <img src="https://unsplash.it/1920/1080" alt="Profile picture" className="pic" />
        <div className="text">
          <span className="name">Lukáš Merta</span>
          <span className="title">Fullstack developer</span>
        </div>
      </div>
      <div className="group">
        <NavbarLink to='/' icon='compass' active={true}>Prozkoumat</NavbarLink>
        <NavbarLink to='/' icon='house'>Jinam</NavbarLink>
      </div>
      <div className="group">
        <span className="group-title">Social</span>
        <NavbarLink to='https://github.com/l-merta' openBlank={true} iconType='brands' icon='github'>GitHub</NavbarLink>
      </div>
    </nav>
  )
}

export default Navbar

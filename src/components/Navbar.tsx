//import React from 'react'

import NavbarLink from './NavbarLink';

const Navbar = () => {
  return (
    <nav className='nav-main'>
      <div className="group group-user">
        <img src="/images/profile-pic.png" alt="Profile picture" className="pic" />
        <div className="text">
          <span className="name">Lukáš Merta</span>
          <span className="title">Fullstack developer</span>
        </div>
      </div>
      <div className="group">
        <NavbarLink to='/' icon='compass' active={true}>Prozkoumat</NavbarLink>
        <NavbarLink to='/' icon='diagram-project'>Projekty</NavbarLink>
        <NavbarLink to='/' icon='microchip'>Technologie</NavbarLink>
        <NavbarLink to='/' icon='pen-line'>Blog</NavbarLink>
        <NavbarLink to='/' icon='briefcase'>Zkušenosti</NavbarLink>
      </div>
      <div className="group">
        <span className="group-title">Social</span>
        <NavbarLink to='https://github.com/l-merta' openBlank={true} iconType='brands' icon='github'>GitHub</NavbarLink>
        <NavbarLink to='/' icon='file-spreadsheet'>Životopis</NavbarLink>
      </div>
    </nav>
  )
}

export default Navbar

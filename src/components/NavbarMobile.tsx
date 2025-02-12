//import React from 'react'
import { useLocation } from 'react-router-dom';

import NavbarLink from './NavbarLink';

const NavbarMobile = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className='nav-mobile'>
      <div className="group">
        <NavbarLink to='/' icon='compass' active={currentPath == '/'}>Prozkoumat</NavbarLink>
        <NavbarLink to='/projects' icon='diagram-project' active={currentPath == '/projects'}>Projekty</NavbarLink>
        <NavbarLink to='/tech' icon='microchip' active={currentPath == '/tech'}>Technologie</NavbarLink>
        {/* <NavbarLink to='/blog' icon='pen-line' active={currentPath == '/blog'}>Blog</NavbarLink> */}
        <NavbarLink to='/experience' icon='briefcase' active={currentPath == '/experience'}>Zkušenosti</NavbarLink>
      </div>
    </nav>
  )
}

export default NavbarMobile

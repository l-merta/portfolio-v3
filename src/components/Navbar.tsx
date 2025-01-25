//import React from 'react'
import { useLocation } from 'react-router-dom';

import NavbarLink from './NavbarLink';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className='nav-main'>
      <div className="group group-user">
        <img src="https://avatars.githubusercontent.com/u/164738919?v=4" alt="Profile picture" className="pic" />
        <div className="text">
          <span className="name">Lukáš Merta</span>
          <span className="title">Fullstack developer</span>
        </div>
      </div>
      <div className="group">
        <NavbarLink to='/' icon='compass' active={currentPath == '/'}>Prozkoumat</NavbarLink>
        <NavbarLink to='/projects' icon='diagram-project' active={currentPath == '/projects'}>Projekty</NavbarLink>
        <NavbarLink to='/tech' icon='microchip' active={currentPath == '/tech'}>Technologie</NavbarLink>
        {/* <NavbarLink to='/blog' icon='pen-line' active={currentPath == '/blog'}>Blog</NavbarLink> */}
        <NavbarLink to='/experience' icon='briefcase' active={currentPath == '/experience'}>Zkušenosti</NavbarLink>
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

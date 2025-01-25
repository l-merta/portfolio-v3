//import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarLinkProps {
  children: React.ReactNode;
  to: string;
  openBlank?: boolean;
  iconType?: string;
  icon?: string;
  active?: boolean;
  main?: boolean;
}

const NavbarLink:React.FC<NavbarLinkProps> = ({ children, to, openBlank, iconType, icon, active, main }) => {
  if (!iconType) iconType = 'light';
  //if (active) iconType = '';

  return (
    <Link 
      to={to} 
      target={openBlank ? '_blank' : '_self'} 
      className={'nav-link ' + (active ? 'nav-link-active ' : ' ') + (main ? 'nav-link-main' : ' ')}
    >
      {icon && <i className={'fa-' + iconType + ' fa-' + icon}></i>}
      <span className="location">{children}</span>
    </Link>
  )
}

export default NavbarLink

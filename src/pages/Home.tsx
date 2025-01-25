//import { useState } from 'react'

import Navbar from './../components/Navbar';
import NavbarLink from '../components/NavbarLink';
import BackImage from './../components/BackImage';
import Contributions from './../components/Contributions';
import ProjectsSmall from './../components/ProjectsSmall';

function Home() {
  return (
    <>
    <Navbar />
    <main>
      <BackImage src='/images/background/gif/group-0/gif-3.gif' location='Úvod' icon='compass'></BackImage>
      <section className='about-me'>
        <img className='pic' src="https://avatars.githubusercontent.com/u/164738919?v=4" alt="GitHub profilový obrázek" />
        <div className="text">
          <div className="name">
            <h1>Lukáš Merta</h1>
            <div className="title">Fullstack web developer</div>
          </div>
          <p>Zaměřuji se na tvorbu moderních webových aplikací, které jsou funkční a přehledné.</p>
          <div className="links">
            <NavbarLink to='/projects' icon='diagram-project' active={true} main={false}>Projekty</NavbarLink>
            {/* <NavbarLink to='/blog' icon='pen-line' active={true}>Blog</NavbarLink> */}
            <NavbarLink to='/tech' icon='microchip' active={true}>Technologie</NavbarLink>
            <NavbarLink to='https://github.com/l-merta' openBlank={true} iconType='brands' icon='github' active={true} main={true}>GitHub</NavbarLink>
          </div>
        </div>
      </section>
      <Contributions />
      <ProjectsSmall />
    </main>
    </>
  )
}

export default Home

//import { useState } from 'react'

import Navbar from './../components/Navbar';
import NavbarMobile from './../components/NavbarMobile';
import BackImage from './../sections/BackImage';
import ProjectsList from './../sections/Projects';

function Projects() {
  return (
    <>
    <Navbar />
    <NavbarMobile />
    <main>
      <BackImage folder={2} title='Ukázka mojí práce' location='Projekty' icon='diagram-project'>
        <p>Každý projekt je příležitost tvořit něco smysluplného a užitečného. Od jednoduchých stránek po webové aplikace.</p>
      </BackImage>
      <ProjectsList />
    </main>
    </>
  )
}

export default Projects

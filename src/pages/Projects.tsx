//import { useState } from 'react'

import Navbar from '../components/Navbar';
import BackImage from '../components/BackImage';

function Projects() {
  return (
    <>
    <Navbar />
    <main>
      <BackImage random={true} folder={2} title='Ukázka mojí práce' location='Projekty' icon='diagram-project'>
        <p>Každý projekt je příležitost tvořit něco smysluplného a užitečného. Od jednoduchých stránek po webové aplikace.</p>
      </BackImage>
    </main>
    </>
  )
}

export default Projects

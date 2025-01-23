//import { useState } from 'react'

import Navbar from '../components/Navbar';
import BackImage from '../components/BackImage';

function Projects() {
  return (
    <>
    <Navbar />
    <main>
      <BackImage random={true} title='Projekty' location='Projekty' icon='diagram-project'>
        <p>Tohle je moje portfolio, bingu lingu.</p>
      </BackImage>
    </main>
    </>
  )
}

export default Projects

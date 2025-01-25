//import { useState } from 'react'

import Navbar from '../components/Navbar';
import BackImage from '../components/BackImage';

function Tech() {
  return (
    <>
    <Navbar />
    <main>
      <BackImage random={true} folder={1} title='Technologie' location='Technologie' icon='microchip'>
        <p>Tohle je moje portfolio, bingu lingu.</p>
      </BackImage>
    </main>
    </>
  )
}

export default Tech

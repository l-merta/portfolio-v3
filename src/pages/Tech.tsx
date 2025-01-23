//import { useState } from 'react'

import Navbar from '../components/Navbar';
import BackImage from '../components/BackImage';

function Tech() {
  return (
    <>
    <Navbar />
    <main>
      <BackImage random={true} title='Technologie'>
        <p>Tohle je moje portfolio, bingu lingu.</p>
      </BackImage>
    </main>
    </>
  )
}

export default Tech

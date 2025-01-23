//import { useState } from 'react'

import Navbar from '../components/Navbar';
import BackImage from '../components/BackImage';

function Experience() {
  return (
    <>
    <Navbar />
    <main>
      <BackImage random={true} title='Zkušenosti'>
        <p>Tohle je moje portfolio, bingu lingu.</p>
      </BackImage>
    </main>
    </>
  )
}

export default Experience

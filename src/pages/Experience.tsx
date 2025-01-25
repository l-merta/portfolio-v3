//import { useState } from 'react'

import Navbar from '../components/Navbar';
import BackImage from '../components/BackImage';

function Experience() {
  return (
    <>
    <Navbar />
    <main>
      <BackImage random={true} folder={1} title='Zkušenosti' location='Zkušenosti' icon='briefcase'>
        <p>Tohle je moje portfolio, bingu lingu.</p>
      </BackImage>
    </main>
    </>
  )
}

export default Experience

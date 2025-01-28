//import { useState } from 'react'

import Navbar from '../components/Navbar';
import BackImage from '../components/BackImage';

function Tech() {
  return (
    <>
    <Navbar />
    <main>
      <BackImage folder={1} title='Moje pracovní nástroje' location='Technologie' icon='microchip'>
        <p>Používám moderní technologie, které mi umožňují vytvářet rychlé a spolehlivé weby.</p>
      </BackImage>
    </main>
    </>
  )
}

export default Tech

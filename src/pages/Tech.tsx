//import { useState } from 'react'

import Navbar from './../components/Navbar';
import NavbarMobile from './../components/NavbarMobile';
import BackImage from './../sections/BackImage';
import TechStack from './../sections/TechStack';

function Tech() {
  return (
    <>
    <Navbar />
    <NavbarMobile />
    <main>
      <BackImage folder={1} title='Moje pracovní nástroje' location='Technologie' icon='microchip'>
        <p>Používám moderní technologie, které mi umožňují vytvářet rychlé a spolehlivé weby.</p>
      </BackImage>
      <TechStack />
    </main>
    </>
  )
}

export default Tech

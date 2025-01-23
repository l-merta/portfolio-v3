//import { useState } from 'react'

import Navbar from './../components/Navbar';
import BackImage from './../components/BackImage';
import Contributions from './../components/Contributions';

function Home() {
  return (
    <>
    <Navbar />
    <main>
      <BackImage random={true} title='Lukáš Merta'>
        <p>Tohle je moje portfolio, bingu lingu.</p>
      </BackImage>
      <Contributions />
    </main>
    </>
  )
}

export default Home

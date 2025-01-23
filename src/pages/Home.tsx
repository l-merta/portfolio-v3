//import { useState } from 'react'

import Navbar from './../components/Navbar';
import BackImage from './../components/BackImage';
import Contributions from './../components/Contributions';

function Home() {
  return (
    <>
    <Navbar />
    <main>
      <BackImage random={true} location='Úvod' icon='compass'></BackImage>
      <section className='about-me'>
        <img className='pic' src="https://avatars.githubusercontent.com/u/164738919?v=4" alt="GitHub profilový obrázek" />
        <div className="text">
          <div className="name">
            <h1>Lukáš Merta</h1>
            <div className="title">Fullstack web developer</div>
          </div>
          <p>Zaměřuji se na tvorbu moderních webových aplikací, které jsou funkční a přehledné.</p>
        </div>
      </section>
      <Contributions />
    </main>
    </>
  )
}

export default Home

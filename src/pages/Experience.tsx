//import { useState } from 'react'

import Navbar from './../components/Navbar';
import NavbarMobile from './../components/NavbarMobile';
import BackImage from './../sections/BackImage';
import ExperienceSection from './../sections/Experience';

function Experience() {
  return (
    <>
    <Navbar />
    <NavbarMobile />
    <main>
      <BackImage folder={1} title='Co mě naučila praxe' location='Zkušenosti' icon='briefcase'>
        <p>Každý projekt a každá výzva mě posouvají dál a rozšiřují mé schopnosti.</p>
      </BackImage>
      <div className="exp-section-cont">
        <div className="column">
          <ExperienceSection name='Práce' icon='briefcase'>
            <p className="error">Zatím nemám žádné pracovní zkušenosti</p>
          </ExperienceSection>
          <ExperienceSection name='Další zkušenosti' icon='sparkles'>
            <div className="item">
              <div className="name">
                <p>Správa vlastního webového serveru</p>
              </div>
              <p className='time'>2024 - současnost</p>
            </div>
            <div className="item">
              <div className="name">
                <p>Tour de App</p>
                <p className="desc">Soutěž ve tvorbě webové aplikace</p>
              </div>
              <p className='time'>2025</p>
            </div>
          </ExperienceSection>
        </div>
        <div className="column">
          <ExperienceSection name='Vzdělání' icon='graduation-cap'>
            <h3>Střední škola</h3>
            <div className="item">
              <div className="name">
                <p>SOŠ a SOU informatiky a spojů Kolín</p>
                <p className="desc">Obor IT</p>
              </div>
              <p className='time'>2022 - současnost</p>
            </div>
          </ExperienceSection>
        </div>
      </div>
    </main>
    </>
  )
}

export default Experience

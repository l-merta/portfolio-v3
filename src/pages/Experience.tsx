//import { useState } from 'react'

import Navbar from './../components/Navbar';
import NavbarMobile from './../components/NavbarMobile';
import BackImage from './../sections/BackImage';
import ExperienceSection from './../sections/Experience';
import TechItemSmall from './../components/TechItemSmall';

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
          <ExperienceSection name='Zaměstnání' icon='briefcase'>
            {/* <p className="error">Zatím nemám žádné zkušenosti ze zaměstnání</p> */}
            <div className="item item-work">
              <div className="name">
                <img src="/images/work/cez.png" alt="" />
                <div className="text">
                  <p>ČEZ D2</p>
                  <p className="desc">Praxe, frontend programátor</p>
                </div>
              </div>
              <p className='time'>2025</p>
            </div>
            <div className="item item-work">
              <div className="name">
                <img src="/images/work/smart-shark-ploutev-bile.png" alt="" />
                <div className="text">
                  <p>SmartShark Tech</p>
                  <p className="desc">Hlavní programátor</p>
                </div>
              </div>
              <p className='time'>2025</p>
            </div>
          </ExperienceSection>
          <ExperienceSection name='Další zkušenosti' icon='sparkles'>
            <div className="item">
              <div className="name">
                <p>Vývoj her v Unity</p>
                <p className="desc">Vývoj 2D a 3D her v Unity pomocí C#</p>
                {/* <p className="tech">
                  <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/csh' useText={false} />
                </p> */}
              </div>
              <p className='time'>2020 - 2023</p>
            </div>
            <div className="item">
              <div className="name">
                {/* <p>3D modelování a grafika</p> */}
                <p className="tech">
                  <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/blender' sizeClass='medium' />
                  <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/photoshop' sizeClass='medium' />
                </p>
              </div>
              <p className='time'>2022</p>
            </div>
            {/* <div className="item">
              <div className="name">
                <p>Tvorba webových stránek</p>
                <p className="tech">
                  <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/html' useText={false} />
                  <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/css' useText={false} />
                  <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/js' useText={false} />
                </p>
              </div>
              <p className='time'>2023</p>
            </div> */}
            {/* <div className="item">
              <div className="name">
                <p className="tech">
                  <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/react' sizeClass='medium' />
                  <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/docker' sizeClass='medium' />
                </p>
              </div>
              <p className='time'>2024</p>
            </div> */}
            <div className="item">
              <div className="name">
                <p>Správa vlastního webového serveru</p>
              </div>
              <p className='time'>2024</p>
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
                <p><a href="https://soskolin.cz" target='_blank'>SOŠ informatiky a spojů a SOU Kolín</a></p>
                <p className="desc">Obor IT</p>
              </div>
              <p className='time'>2022 - současnost</p>
            </div>
          </ExperienceSection>
        </div>
      </div>
      <div className="section section-wide">
        <h2>Reference</h2>
        <div className="ref-section-cont">
          <div className="column">
            <div className="ref-item">
              <div className='text'>
                <p>Lukášův přístup k práci je příkladný — je velmi pracovitý, cílevědomý a vždy ochotný přispět vlastní iniciativou. Oceňujeme zejména jeho schopnost otevřeně komunikovat své názory a přinášet konstruktivní návrhy, které posunuly náš projekt směrem k inovativnějším a efektivnějším řešením.</p>
                <p>Během naší spolupráce přinesl do projektu řadu nových nápadů, které se pozitivně promítly do výsledné podoby platformy. Jeho technické znalosti, kombinované s kreativním přístupem, byly pro náš tým velkým přínosem. Zároveň oceňujeme jeho přirozenou chuť učit se nové věci a schopnost rychle se adaptovat na nové technologie a postupy, což výrazně přispělo k celkovému rozvoji projektu.</p>
                <p>Jeho pracovní nasazení, spolehlivost a chuť neustále se zlepšovat z něj činí cenného člena jakéhokoliv týmu. Věřím, že i v budoucích projektech bude přinášet stejně vysokou úroveň profesionality a přidané hodnoty.</p>
              </div>
              <div className='author'>
                <img src="/images/work/smart-shark-ploutev-bile.png" alt="" />
                <div className="name">
                  <span>Jan Plachý</span>
                  <span className="desc">CEO SmartShark Tech</span>
                </div>
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </main>
    </>
  )
}

export default Experience

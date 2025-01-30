//import React from 'react'

import NavbarLink from './../components/NavbarLink';
import TechItemSmall from './../components/TechItemSmall';

const TechStackSmall = () => {
  return (
    <section className="tech-stack-small">
      <div className="text">
        <h2>Technologie</h2>
        <p className='section-description'>Některé z mých nejpoužívanějších webových technologií</p>
      </div>
      <div className="tech-cont">
        <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/react' />
        <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/node' />
        <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/docker' />
      </div>
      <div className="links">
        <NavbarLink to='tech' icon='microchip' active={true} main={true}>Všechny technologie</NavbarLink>
      </div>
    </section>
  )
}

export default TechStackSmall

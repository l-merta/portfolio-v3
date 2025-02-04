//import React from 'react'

import TechItemSmall from '../components/TechItemSmall';

const TechStack = () => {
  return (
    <section className="tech-stack">
      {/* <div className="text">
        <h2>Technologie</h2>
        <p className='section-description'>Některé z mých nejpoužívanějších webových technologií</p>
      </div> */}
      <div className="tech-cont">
        <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/react' sizeClass='medium' />
        <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/ts' sizeClass='medium' />
        <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/node' sizeClass='medium' />
        <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/express' sizeClass='medium' />
        <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/mysql' sizeClass='medium' />
        <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/docker' sizeClass='medium' />
        <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/git' sizeClass='medium' />
        <TechItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/tech/figma' sizeClass='medium' />
      </div>
    </section>
  )
}

export default TechStack

//import React from 'react'

import ProjectItem from './../components/ProjectItem';

const ProjectsSmall = () => {
  return (
    <section className="section projects">
      <div className="description-wrapper">
        <h2>Projekty</h2>
        <p className='section-description'>Programování se věnuji pět let, z toho dva roky webovému vývoji. Dělám frontend i backend, nejčastěji v JavaScriptu (React, Express). Používám moderní technologie jako Git a Docker.</p>
        <p className='section-description'>Své weby hostuji na vlastním domácím serveru s automatizovaným nasazením přes GitHub. Server spravuji sám, běží na něm databáze, subdomény a kontejnerizované aplikace, dostupné přes Cloudflare Tunnel. Každý projekt je pro mě výzvou k dalšímu zlepšení.</p>
      </div>
      <div className="projects-cont">
        <ProjectItem dataSrc='https://admin.mertalukas.cz/api/v1/websites/filmino'/>
        <ProjectItem dataSrc='https://admin.mertalukas.cz/api/v1/websites/kahoot'/>
        <ProjectItem dataSrc='https://admin.mertalukas.cz/api/v1/websites/tda'/>
        <ProjectItem dataSrc='https://admin.mertalukas.cz/api/v1/websites/bakaweb'/>
      </div>
    </section>
  )
}

export default ProjectsSmall

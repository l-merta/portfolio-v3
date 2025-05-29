//import React from 'react'

import ProjectItemSmall from './../components/ProjectItemSmall';
import NavbarLink from './../components/NavbarLink';

const ProjectsSmall = () => {
  return (
    <section className="section projects-small">
      <h2>Projekty</h2>
      <p className='section-description'>Některé z mých nejnovějších projektů</p>
      <div className="projects-cont">
        <ProjectItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/websites/filmino'/>
        <ProjectItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/websites/kahoot'/>
        <ProjectItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/websites/tda'/>
        <ProjectItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/websites/museum'/>
      </div>
      <div className="links">
        <NavbarLink to='projects' icon='project-diagram' active={true} main={true}>Všechny projekty</NavbarLink>
      </div>
    </section>
  )
}

export default ProjectsSmall

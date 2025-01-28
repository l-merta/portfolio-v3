//import React from 'react'

import ProjectItemSmall from '../components/ProjectItemSmall';
import NavbarLink from '../components/NavbarLink';

const ProjectsSmall = () => {
  return (
    <div className="projects-small">
      <h2>Projekty</h2>
      <p className='section-description'>Některé z mých nejnovějších projektů</p>
      <div className="projects">
        <ProjectItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/websites/filmino'/>
        <ProjectItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/websites/tda'/>
        <ProjectItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/websites/bakaweb'/>
        <ProjectItemSmall dataSrc='https://admin.mertalukas.cz/api/v1/websites/tictacweb'/>
      </div>
      <div className="links">
        <NavbarLink to='projects' icon='project-diagram' active={true} main={true}>Všechny projekty</NavbarLink>
      </div>
    </div>
  )
}

export default ProjectsSmall

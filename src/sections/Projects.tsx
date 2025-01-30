//import React from 'react'

import ProjectItem from './../components/ProjectItem';

const ProjectsSmall = () => {
  return (
    <section className="section projects">
      <h2>Projekty</h2>
      <p className='section-description'>Některé z mých nejnovějších projektů</p>
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

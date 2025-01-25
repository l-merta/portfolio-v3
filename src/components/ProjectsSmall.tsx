//import React from 'react'
import { Link } from 'react-router-dom'

import NavbarLink from './NavbarLink';

const ProjectsSmall = () => {
  return (
    <div className="projects-small">
      <h2>Projekty</h2>
      <p className='section-description'>Některé z mých nejnovějších projektů</p>
      <div className="projects">
        <Link to='/' className="project">
          <img src="https://unsplash.it/2001/2000" alt="Project photo" />
          <span className="title">Project name</span>
          <p className="description">Tohle je můj projekt, co sem dělal.</p>
        </Link>
        <Link to='/' className="project">
          <img src="https://unsplash.it/2002/2000" alt="Project photo" />
          <span className="title">Project name</span>
          <p className="description">Tohle je můj projekt, co sem dělal.</p>
        </Link>
        <Link to='/' className="project">
          <img src="https://unsplash.it/2003/2000" alt="Project photo" />
          <span className="title">Project name</span>
          <p className="description">Tohle je můj projekt, co sem dělal.</p>
        </Link>
        <Link to='/' className="project">
          <img src="https://unsplash.it/2004/2000" alt="Project photo" />
          <span className="title">Project name</span>
          <p className="description">Tohle je můj projekt, co sem dělal.</p>
        </Link>
      </div>
      <div className="links">
        <NavbarLink to='projects' icon='project-diagram' active={true} main={true}>Všechny projekty</NavbarLink>
      </div>
    </div>
  )
}

export default ProjectsSmall

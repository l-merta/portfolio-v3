import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from './../components/Navbar';
import NavbarLink from './../components/NavbarLink';
import TechItemSmall from './../components/TechItemSmall';
import Readme from './../components/Readme';

interface ProjectDataProps {
  name: string;
  file_name: string;
  description: string;
  description_short: string;
  link: string;
  tech: Array<String>;
  repo_name: string;
  subdomain: string;
  port: number;
  dir: string;
  public: boolean;
  status: string;
  status_message: string;
  redirect: string;
  type: string;
  created_at: string;
  updated_at: string;
}

function ProjectPage() {
  const { file_name } = useParams();

  const [projectData, setProjectData] = useState<ProjectDataProps>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://admin.mertalukas.cz/api/v1/websites/${file_name}`);
        const projectData = await response.json();
        if (projectData.success) {
          setProjectData(projectData.data);
        } else {
          // Handle the case where success is false
          console.error('Failed to fetch project data');
        }
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchData();
  }, [file_name]);

  return (
    <>
      <Navbar />
      <main className='project-main'>
        {projectData ? (
          <>
          <div className="background-wrapper">
            <img className="background" src={"https://admin.mertalukas.cz/api/v1/websites/" + projectData.file_name + "/images/1"} alt="Project background image" />
          </div>
          <div className="project-info">
            <div className="icon-wrapper">
              <img className='icon' src={"https://admin.mertalukas.cz/api/v1/websites/" + projectData.file_name + "/images/"} alt="" />
            </div>
            <div className="text">
              <h1>{projectData.name}</h1>
              <div className="s1">
                <NavbarLink to={projectData.link} openBlank={true} active={true}>{projectData.link}</NavbarLink>
                {projectData.repo_name && 
                  <NavbarLink to={'https://github.com/l-merta/' + projectData.repo_name} openBlank={true} iconType='brands' icon='github' active={true} main={true}>{'l-merta/' + projectData.repo_name}</NavbarLink>
                }
              </div>
              <div className="tech">
                {projectData.tech.map((tech) => (
                  <TechItemSmall dataSrc={'https://admin.mertalukas.cz/api/v1/tech/' + tech} sizeClass='medium' />
                ))}
              </div>
              <p className='description'>{projectData.description}</p>
            </div>
          </div>
          <Readme repo={projectData.repo_name} />
          </>
        ) : 'Loading...'}
      </main>
    </>
  );
}

export default ProjectPage;

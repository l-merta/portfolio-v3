import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from './../components/Navbar';
import NavbarMobile from './../components/NavbarMobile';
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
  const [error, setError] = useState<string | null>(null);
  const [favicon, setFavicon] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://admin.mertalukas.cz/api/v1/websites/${file_name}`);
        const projectData = await response.json();
        if (!response.ok) {
          if (response.status === 404) {
            setError('Projekt ' + file_name + ' nebyl nalezen');
          } else {
            setError('Nepodařilo se získat data o projektu ' + file_name);
          }
          return;
        }
        if (projectData.success) {
          setProjectData(projectData.data);
          fetchFavicon(projectData.data.link);
        } else {
          setError('Nepodařilo se získat data o projektu ' + file_name);
          console.error('Failed to fetch project data');
        }
      } catch (error) {
        setError('Nepodařilo se získat data o projektu ' + file_name);
        console.error('Error fetching project data:', error);
      }
    };

    const fetchFavicon = async (link: string) => {
      try {
        const response = await fetch(link);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const iconLink = doc.querySelector("link[rel~='icon']") as HTMLLinkElement;
        if (iconLink) {
          const faviconUrl = new URL(iconLink.getAttribute('href')!, link).href;
          console.log(faviconUrl);
          setFavicon(faviconUrl);
        } else {
          setFavicon(`https://www.google.com/s2/favicons?domain=${new URL(link).hostname}`);
        }
      } catch (error) {
        console.error('Error fetching favicon:', error);
      }
    };

    fetchData();
  }, [file_name]);

  if (error) {
    return (
      <>
        <Navbar />
        <NavbarMobile />
        <main className='error-main'>
          <h1 style={{fontSize: '2.0rem'}}>{error}</h1>
        </main>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <NavbarMobile />
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
                <NavbarLink to={projectData.link} openBlank={true} active={true}>
                  {favicon && <img src={favicon} alt="Favicon" />}
                  <span>{projectData.link}</span>
                </NavbarLink>
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
        ) : 'Hledám projekt ' + file_name}
      </main>
    </>
  );
}

export default ProjectPage;

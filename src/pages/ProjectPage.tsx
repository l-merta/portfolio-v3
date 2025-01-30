import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../components/Navbar';
import BackImage from '../sections/BackImage';

interface ProjectDataProps {
  name: string;
  file_name: string;
  link: string;
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
      <main>
        <BackImage folder={2} title={projectData?.name} location='Projekt' icon='diagram-project'></BackImage>
        {projectData ? (
          <div>
          </div>
        ) : 'Loading...'}
      </main>
    </>
  );
}

export default ProjectPage;

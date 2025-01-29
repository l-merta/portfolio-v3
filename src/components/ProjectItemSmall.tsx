import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ProjectProps {
  dataSrc?: string;
  data?: ProjectDataProps;
}
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

const ProjectItemSmall:React.FC<ProjectProps> = ({ dataSrc, data }) => {
  const [projectData, setProjectData] = useState<ProjectDataProps | null>(null);

  useEffect(() => {
    const fetchData = async (src: string) => {
      try {
        const response = await fetch(src);
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

    if (dataSrc)
      fetchData(dataSrc);
    else if (data)
      setProjectData(data);
  }, [dataSrc, data]);

  if (projectData) {
    return (
      <Link to={projectData.link} target='_blank' className='project-item-small'>
        <img src={'https://admin.mertalukas.cz/api/v1/websites/' + projectData.file_name + '/images'} alt="Project photo" />
        <span className="title">{projectData.name}</span>
        <p className="description">Tohle je můj projekt, co sem dělal.</p>
      </Link>
    )
  }
}

export default ProjectItemSmall

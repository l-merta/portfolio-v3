import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';

interface TechProps {
  dataSrc?: string;
  data?: TechDataProps;
}
interface TechDataProps {
  name: string;
  file_name: string;
  started: string;
  created_at: string;
  updated_at: string;
}

const ProjectItemSmall:React.FC<TechProps> = ({ dataSrc, data }) => {
  const [techData, setTechData] = useState<TechDataProps | null>(null);

  useEffect(() => {
    const fetchData = async (src: string) => {
      try {
        const response = await fetch(src);
        const techData = await response.json();
        if (techData.success) {
          setTechData(techData.data);
        } else {
          // Handle the case where success is false
          console.error('Failed to fetch tech data');
        }
      } catch (error) {
        console.error('Error fetching tech data:', error);
      }
    };

    if (dataSrc)
      fetchData(dataSrc);
    else if (data)
      setTechData(data);
  }, [dataSrc, data]);

  if (techData) {
    return (
      <div className="tech-item-small">
        <div className="img-cont">
          <img src={'https://admin.mertalukas.cz/api/v1/tech/' + techData.file_name + '/images'} alt="Tech foto" />
        </div>
        <div className="text">
          <span className="name">{techData.name}</span>
          <span className="description">Tech kterej používám</span>
        </div>
      </div>
    )
  }
}

export default ProjectItemSmall

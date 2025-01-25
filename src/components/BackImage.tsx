import { useState, useEffect } from 'react'

interface BackImageProps {
  children?: React.ReactNode;
  title?: string;
  location?: string;
  icon?: string;
  src?: string;
  random?: boolean;
  folder?: number;
}

const BackImage:React.FC<BackImageProps> = ({ children, title, location, icon, src, random, folder }) => {
  const [imgSource, setImgSource] = useState<string | undefined>(undefined);
  const fileInfo = [
    { folder: 'group-0', count: 8 },
    { folder: 'group-1', count: 4 },
    { folder: 'group-2', count: 5 }
  ]

  useEffect(() => {
    if (random && folder !== undefined) {
      const randomIndex = Math.floor(Math.random() * fileInfo[folder].count) + 1;
      console.log(randomIndex);
      setImgSource(`/images/background/gif/${fileInfo[folder].folder}/gif-${randomIndex}.gif`);
    }
    else {
      setImgSource(src);
    }
  }, [src, random, folder]);

  return (
    <div className={"back-image " + (!title ? "back-image-small" : "")}>
      {location && 
        <div className='location'>
            <i className={'fa-regular fa-' + icon}></i>
            <div className="text">{location}</div>
        </div>
      }
      {title && <h1>{title}</h1>}
      {children && <div className='text'>{children}</div>}
      {imgSource && <img src={imgSource} alt="Background image" />}
    </div>
  )
}

export default BackImage

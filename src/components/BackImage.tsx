import { useState, useEffect } from 'react'

interface BackImageProps {
  children?: React.ReactNode;
  title?: string;
  location?: string;
  icon?: string;
  src?: string;
  folder?: number;
  imageName?: string;
}

const BackImage:React.FC<BackImageProps> = ({ children, title, location, icon, src, folder, imageName }) => {
  const [imgSource, setImgSource] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!src) {
      setImgSource(`https://admin.mertalukas.cz/api/v1/images/gif/group-${folder}/${imageName ? imageName : ''}`);
    }
    else {
      setImgSource(src);
    }
  }, [src, folder, imageName]);

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

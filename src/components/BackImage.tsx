import { useState, useEffect } from 'react'

interface BackImageProps {
  children?: React.ReactNode;
  title?: string;
  location?: string;
  icon?: string;
  src?: string;
  random?: boolean;
}

const BackImage:React.FC<BackImageProps> = ({ children, title, location, icon, src, random }) => {
  const gradFilesCount = 6;
  const [imgSource, setImgSource] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (random) {
      const randomIndex = Math.floor(Math.random() * gradFilesCount) + 1;
      console.log("rand index", randomIndex);
      setImgSource(`/images/background/gradient/dark/grad-${randomIndex}.png`);
    }
    else {
      setImgSource(src);
    }
  }, [src, random]);

  return (
    <div className="back-image">
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

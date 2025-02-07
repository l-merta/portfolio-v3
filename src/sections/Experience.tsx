import React from "react";

interface ExperienceProps {
  children?: React.ReactNode;
  name: string;
  icon: string;
}

const Experience:React.FC<ExperienceProps> = ({ children, name, icon }) => {
  return (
    <section className="exp">
      <div className="header">
        <i className={'fa-regular fa-' + icon}></i>
        <h2>{name}</h2>
      </div>
      <div className="body">
        {children}
      </div>
    </section>
  )
}

export default Experience

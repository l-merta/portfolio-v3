//import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Contributions = () => {
  const theme: any = {
    light: ['#0e0e0e', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className="contributions-container">
      <h2>GitHub</h2>
      <GitHubCalendar username="l-merta" theme={theme} />
    </div>
  );
}

export default Contributions;

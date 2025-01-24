//import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Contributions = () => {
  const theme: any = {
    light: ['#0e0e0e', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className="contributions-container">
      <div className="wrapper">
        <h3>GitHub příspěvky</h3>
        <GitHubCalendar username="l-merta" theme={theme} />
      </div>
    </div>
  );
}

export default Contributions;

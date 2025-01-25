//import React from 'react';
//import { Link } from 'react-router-dom';
import GitHubCalendar from 'react-github-calendar';

const Contributions = () => {
  const theme: any = {
    light: ['#0e0e0e', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className="contributions-container">
      <div className="wrapper">
        <div className="text">
          <h3>GitHub příspěvky</h3>
          {/* <Link to='https://github.com/l-merta' target='_blank'>l-merta</Link> */}
        </div>
        <GitHubCalendar username="l-merta" theme={theme} />
      </div>
    </div>
  );
}

export default Contributions;

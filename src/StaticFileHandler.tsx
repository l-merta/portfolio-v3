//import React from 'react';

const StaticFileHandler = () => {
  const path = window.location.pathname;
  window.location.href = path;
  return null;
};

export default StaticFileHandler;
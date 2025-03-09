//import React from 'react';

import Navbar from './../components/Navbar';
import NavbarMobile from './../components/NavbarMobile';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <NavbarMobile />
      <main className='error-main'>
        <h1>404</h1>
        <h2>Stránka nebyla nalezena</h2>
      </main>
    </>
  );
};

export default NotFound;
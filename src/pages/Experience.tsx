//import { useState } from 'react'

import Navbar from '../components/Navbar';
import BackImage from '../components/BackImage';

function Experience() {
  return (
    <>
    <Navbar />
    <main>
      <BackImage folder={1} title='Co mě naučila praxe' location='Zkušenosti' icon='briefcase'>
        <p>Každý projekt a každá výzva mě posouvají dál a rozšiřují mé schopnosti.</p>
      </BackImage>
    </main>
    </>
  )
}

export default Experience

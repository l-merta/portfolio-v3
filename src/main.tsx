import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import StaticFileHandler from './StaticFileHandler';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectPage from './pages/ProjectPage';
import Tech from './pages/Tech';
import Experience from './pages/Experience';

import './styles/index.css';
import './styles/main.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:file_name' element={<ProjectPage />} />
        <Route path='/tech' element={<Tech />} />
        <Route path='/blog' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        {/* Catch-all route to handle static files */}
        <Route path='*' element={<StaticFileHandler />} />
      </Routes>
    </Router>
  </StrictMode>,
);